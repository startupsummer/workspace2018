const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const Joi = require('joi');

const webpackConfig = require('../client/webpack.config.js');
const reviews = [];
const schema = Joi.object().keys({
  name: Joi.string().alphanum(),
  surname: Joi.string().alphanum().required(),
  description: Joi.string().alphanum().min(4).required(),
  select: Joi.number().integer().min(0).max(10),
});

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.keys = ['coockie'];
app.use(session(app));

app.use(async (ctx, next) => {
  if (ctx.path === '/') ctx.session.views = ++ctx.session.views || 1;
  await next();
});

router
  .get('/counter', async (ctx, next) => {
    ctx.body = ctx.session.views;
  })
  .get('/reviewsList', async (ctx, next) => {
     ctx.body = reviews;
  })
  .post('/addReview', async (ctx, next) => {
    const review = Joi.validate(ctx.request.body, schema);
    if(!review.error){
      reviews.push(review.value);
    } 
  });

app.use(koaWebpack({
  compiler: webpack(webpackConfig),
  dev: {
    publicPath: webpackConfig.output.publicPath,
  }
}));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
