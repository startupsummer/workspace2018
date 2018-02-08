const path = require('path');
const Joi = require('joi');
const webpack = require('webpack');

const Koa = require('koa');
const Router = require('koa-router');
const koaWebpack = require('koa-webpack');
const serve = require('koa-static');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');

const webpackConfig = require('./web/client/webpack.dev.config');

const router = new Router();
const app = new Koa();

app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
}

const schema = Joi.object().keys({
  firstName: Joi.string(),
  lastName: Joi.string().min(1).required(),
  description: Joi.string().min(3).required(),
  rating: Joi.number().integer().positive(),
});

app.use(session(CONFIG, app));

app.use(serve(path.resolve('./build')));

app.use(bodyParser());

let mainData = [];
router
  .post('/api/form-data', (ctx, next) => {
    const result = Joi.validate(ctx.request.body, schema);
    ctx.assert(!result.error, 400);
     ctx.body = ctx.request.body;
     mainData.push(ctx.request.body);
  })
  .get('/counter', (ctx, next) => {
    const count = (ctx.session.views + 1) || 0;
    ctx.session.views = count;
    ctx.body = count;
  })
  .get('/reviews', (ctx, next) => {
    console.log(mainData);
    ctx.body = mainData;
  });


if (process.env.NODE_ENV === 'development') {
  app.use(koaWebpack({
    compiler: webpack(webpackConfig),
    hot: {},
    dev: {
      publicPath: webpackConfig.output.publicPath,
    },
  }));
}

app.use(router.routes());

app.listen(3000);
