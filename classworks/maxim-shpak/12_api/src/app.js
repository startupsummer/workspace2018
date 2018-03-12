const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const Router = require('koa-router');

const config = require('../config/index');
const jwtService = require('./resources/jwtService');
const validationService = require('./resources/validationService');

const app = new Koa();

app.use(bodyParser({ enableTypes: ['form', 'json', 'text']}));

const router = new Router();

const publicRouter = new Router();

publicRouter.post('/api/v1/account/login', (ctx, next) => {
    const result = validationService.validate(ctx.request.body);
    if (result.error && result.error.details) {
      ctx.body = result.error.details;
      ctx.status = 400;
    } else {
      ctx.body = jwtService.generateToken(ctx.request.body);
    }
  });

app.use(publicRouter.routes());

app.use(publicRouter.allowedMethods());

app.use(async (ctx, next) => {
  const userData = jwtService.verifyUser(ctx.request.headers['x-access-token']);
  if (userData) {
    ctx.userData = userData;
    next();
  } else {
    ctx.status = 401;
  }
});

const privateRouter = new Router();

privateRouter.get('/api/v1/me', (ctx, next) => ctx.body = ctx.userData);

app.use(privateRouter.routes());

app.use(privateRouter.allowedMethods());

app.listen(config.port, () => {
    console.info(`This server successfully started on http://localhost:${config.port}!`);
});