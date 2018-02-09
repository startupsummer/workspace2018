const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const config = require('./config');
const jwt = require('./jwt');
const validator = require('./validator');

const app = new Koa();
const publicRouter = new Router();
const privateRouter = new Router();


app.use(bodyParser());

publicRouter
  .post('/api/v1/account/login', (ctx, next) => {
    const result = validator(ctx.request.body);
    if (result) {
      const errArray = [];
      result.details.forEach(item => errArray.push(item.message));
      ctx.body = errArray;
      ctx.status = 400;
    } else {
      ctx.body = jwt.generateToken(ctx.request.body);
    }
  });

app
  .use(publicRouter.routes())
  .use(publicRouter.allowedMethods());

app.use(async (ctx, next) => {
  const decodedUser = jwt.verifyUser(ctx.request.headers['x-access-token']);
  if (!decodedUser) {
    ctx.status = 404;
  } else {
    ctx.decodedUser = decodedUser;
    next();
  }
});

privateRouter
  .get('/api/v1/me', (ctx, next) => {
    ctx.body = ctx.decodedUser;
});

app
  .use(privateRouter.routes())
  .use(privateRouter.allowedMethods());

app.listen(config.port);
