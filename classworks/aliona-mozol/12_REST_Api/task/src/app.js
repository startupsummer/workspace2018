const Koa = require('koa');
const config = require('../config');

const app = new Koa();
require('./config/koa')(app);

app.listen(config.port, () => {
  console.log(`Api server listening on port ${config.port}.`);
});

