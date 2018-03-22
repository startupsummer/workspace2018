const mount = require('koa-mount');
const userRouter = require('../../resources/users/router');
const accountRouter = require('../../resources/account/router');

module.exports = (app) => {
  app.use(mount('/users', userRouter));
  app.use(mount('/v1/account', accountRouter));
};
