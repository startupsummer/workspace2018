const hmr = require('../hmr');

// const { logger } = global;

module.exports = (app) => {

  hmr(app);

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // logger.error(err);
      this.status = err.status || 500;
      this.body = {
        errors: [{ _global: 'An error has occurred' }],
      };
    }
  });
};
