const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const controller = require('./resources/controller');
const config = require('../config');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router
  .post('/api/v1/account/login', controller.login)
  .get('/api/v1/me', controller.getMe);

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(config.port);
