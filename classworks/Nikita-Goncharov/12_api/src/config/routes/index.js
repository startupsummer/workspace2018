const publicRoutes = require('./public');

const defineRoutes = (app) => {
  publicRoutes(app);
};

module.exports = defineRoutes;
