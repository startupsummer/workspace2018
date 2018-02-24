const Koa = require('koa');
const config = require('../config/index');

const app = new Koa();
require('./config/koa')(app);

app.listen(config.port, () => console.log(`Listening on port ${config.port}.`));