const config = require('./../config');
const Koa = require('koa');

const app = new Koa();
require('./config/koa')(app);

app.listen(config.port, () => {
  console.log(`Server working on port ${config.port}.`)
});
