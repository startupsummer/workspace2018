const jwt = require('koa-jwt');

const config = require('config');

const middlewares = require('infrastructure/middlewares');
const publicRoutes = require('./public');
const authenticatedRoutes = require('./authenticated');

const defineRoutes = (app) => {
  app.use(publicRoutes);

  app.use(middlewares.urlToken);
  app.use(jwt(config.jwt));
  app.use(middlewares.user);
  app.use(middlewares.authorization);

  app.use(authenticatedRoutes);
};

module.exports = defineRoutes;
