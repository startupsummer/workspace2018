

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./../config');
const Koa = require('koa');

const app = new Koa();
require('./config/koa')(app);

if (!module.parent) {
  app.listen(config.port, config.ip, () => {
    console.log('Koa server listening on %d, in %s mode', config.port, config.env);
  });
}

module.exports = app;
