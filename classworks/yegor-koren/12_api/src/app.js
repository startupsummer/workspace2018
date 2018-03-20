const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const validation = require('./utils/validation');
const auth = require('./utils/auth');
const jwt = require('./utils/jwt');
const config = require('../config');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router
  .post('/api/v1/account/login', async (ctx, next) => {
    const valid = validation(ctx.request.body);
    ctx.assert(!valid.error, 400);

    if (auth(valid.value)) {
        const token = jwt.createToken(valid.value);
        ctx.body = token;
    }
  })
  .get('/api/v1/me', async (ctx, next) => {
    const decoded = jwt.verifyToken(ctx.headers['access-token']);
    if (decoded !== null) ctx.body = decoded;
    else ctx.status = 401;
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(config.port);
