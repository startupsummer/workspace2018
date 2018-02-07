const jwt = require('koa-jwt');
const publicRoutes = require('./public');
const authRoutes = require('./auth');

const defineRoutes = (app) => {
  publicRoutes(app);

  app.use(jwt({ secret: 'my-secret' }));

  authRoutes(app);
};

module.exports = defineRoutes;
