// allows require modules relative to /src folder
// for example: require('lib/mongo/idGenerator')
// all options can be found here: https://gist.github.com/branneman/8048520
const supertest = require('supertest');
require('app-module-path').addPath(__dirname);
global.logger = require('logger');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const { logger } = global;
const config = require('config');
const Koa = require('koa');

process.on('unhandledRejection', (reason, p) => {
  logger.log('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
  // application specific logging here
});

const app = new Koa();
require('./config/koa')(app);

const staffTest = require('./resources/staff/staff.test');
const tasksTest = require('./resources/tasks/tasks.test');

const request = supertest.agent(app.listen());
staffTest(request);
tasksTest(request);


app.listen(config.port, () => {
  logger.warn(`Api server listening on ${config.port}, in ${process.env.NODE_ENV} mode`);
});

module.exports = app;
