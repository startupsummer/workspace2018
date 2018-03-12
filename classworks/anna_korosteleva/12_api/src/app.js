const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const Router = require('koa-router');
const config = require('../config');
const jwt = require('./jwt');
const validator = require('./validator');

const app = new Koa();
const publicRouter = new Router();
const privateRouter = new Router();

app.use(bodyParser());

publicRouter.post('/api/v1/account/login', (ctx, next) => {
    const result = validator(ctx.request.body);
    if (result.error && result.error.details) {
      ctx.body = result.error.details;
      ctx.status = 400;
    } else {
      ctx.body = jwt.generateToken(ctx.request.body);
    }
  });

app
  .use(publicRouter.routes())
  .use(publicRouter.allowedMethods());

app.use(async (ctx, next) => {
  const userData = jwt.verifyUser(ctx.request.headers['x-access-token']);
  if (userData) {
    ctx.userData = userData;
    next();
  } else {
    ctx.status = 401;
  }
});

privateRouter.get('/api/v1/me', (ctx, next) => ctx.body = ctx.userData);

app
  .use(privateRouter.routes())
  .use(privateRouter.allowedMethods());

app.listen(config.port);