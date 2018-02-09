const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const koaWebpack = require('koa-webpack');

const webpackConfig = require('../../webpack.config.js');
const webpack = require('webpack');

const { join } = require('path');

const app = new Koa();
const router = new Router();

app.keys = ['some secret hurr'];

const Joi = require('joi');

const schema = Joi.object().keys({
    surname: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().alphanum(),
    descr: Joi.string(),
    number: Joi.number().integer().min(1).max(10),
  });

let wowObjects = [];

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
};

app.use(session(CONFIG, app));

app.use(bodyParser());

app.use(koaWebpack({
  compiler: webpack(webpackConfig),
  hot: {},
  dev: {
    publicPath: webpackConfig.output.publicPath,
  },
}));


app.use(serve(join(__dirname, '../client/')));

router
  .get('/count', ctx => {
    if (!ctx.session.views) ctx.session.views = 0;
    ctx.session.views++;

    ctx.body = ctx.session.views;
  })
  .post('/postForm', ctx => {
    const result = Joi.validate(ctx.request.body, schema);
    if (!result.error) {
      wowObjects.push(result.value);
      ctx.status = 200;
    }
    else
      ctx.response.status = 400;
  })
  .get('/reviews', ctx => {
    ctx.body = wowObjects;
  })

app.use(router.routes());

app.listen(3000);
