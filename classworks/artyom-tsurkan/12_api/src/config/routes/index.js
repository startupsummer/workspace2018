const jwt = require('koa-jwt');
const publicRoutes = require('./public');
const authRoutes = require('./auth');
const config = require('../../../config');

const defineRoutes = (app) => {
  publicRoutes(app);

  app.use(jwt({ secret: config.secret }));

  authRoutes(app);
};

module.exports = defineRoutes;
