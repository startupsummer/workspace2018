const Koa = require('koa');
const serve = require('koa-static');
const session = require('koa-session');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const Router = require('koa-router');
const Joi = require('joi');

const webpackConfig = require('../client/webpack.config.js');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.keys = ['some secret hurr'];
app.use(session(app));

let reviewsArray = [];

const schema = Joi.object().keys({
  name: Joi.string().alphanum(),
  surname: Joi.string().alphanum().min(1).required(),
  description: Joi.string().alphanum().min(4).required(),
  mark: Joi.number().integer().min(0).max(10),
});

router
  .get('/counter', async (ctx, next) => {
    let session = ctx.session;
    session.count = (session.count + 1) || 0;
    ctx.body = session.count;
  })
  .get('/reviews', async (ctx, next) => {
    ctx.body = reviewsArray;
  })
  .post('/api/form-data', async (ctx, next) => {
    const review = ctx.request.body;
    const result = Joi.validate(review, schema);
    ctx.assert(!result.error, 400);
    reviewsArray.push(ctx.request.body);
    ctx.body = 'Thank You for the review! ^^';
  });

app.use(router.routes())
app.use(router.allowedMethods());

if(isDev) {
  app.use(koaWebpack({
    compiler: webpack(webpackConfig),
    hot: {},
    dev: {
      publicPath: webpackConfig.output.publicPath,
    },
  }));
} else {
  app.use(serve(path.join(__dirname, '../client/public')));
}

app.listen(3000);
