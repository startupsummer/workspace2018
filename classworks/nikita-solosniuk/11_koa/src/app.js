const webpack = require('webpack');
const koa = require('koa');
const koaWebpack = require('koa-webpack');
const webpackConfig = require('../web/client/webpack.config');
const router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const Joi = require('joi');

const schema = ({
  firstName: Joi.string().trim().regex(/^[A-Za-zА-Яа-яЁё]+$/g).required(),
  secondName: Joi.string().regex(/^[A-Za-zА-Яа-яЁё]+$/g).required(),
  description: Joi.string().min(3).required(),
  mark: Joi.number(),
});

const app = new koa();
const koaRouter = new router();
app.keys = ['secret', 'key'];

app.use(bodyParser());

app
.use(koaRouter.routes())
.use(koaRouter.allowedMethods());

app.use(serve(path.resolve(__dirname, '../web/client/')));

app.use(session(app));

app.use((ctx,next) => {
  if (ctx.path === '/public') {
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
  }
  next();
});

app.use(koaWebpack({
  compiler: webpack(webpackConfig),
  dev: {
    publicPath: webpackConfig.output.publicPath,
  },
}));

const messages = [];

koaRouter.post('/message', ctx => {
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error !== null) {
    ctx.body = result.error;
    ctx.status = 400;
  }
  else {
    messages.push(ctx.request.body);
    ctx.status = 200;
  }
});
koaRouter.get('/messageList', (ctx) => {
  ctx.body = messages;
});
koaRouter.get('/showVisits', (ctx) => ctx.body = ctx.session.views);

app.listen(3001, () => {
});