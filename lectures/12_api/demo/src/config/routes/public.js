const mount = require('koa-mount');
const userRouter = require('../../resources/users/router');

module.exports = (app) => {
  app.use(mount('/users', userRouter));
};
