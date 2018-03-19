const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const session = require('koa-session');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const Joi = require('joi');

const webpackConfig = require('./client/webpack.config.js');
const reviews = [];
const schema = Joi.object().keys({
  name: Joi.string().alphanum(),
  surname: Joi.string().alphanum().required(),
  description: Joi.string().alphanum().min(4).required(),
  mark: Joi.number().integer().min(0).max(10),
});

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.keys = ['some secret hmmm'];
app.use(session(app));

app.use(async (ctx, next) => {
  if (ctx.path === '/') ctx.session.views = ++ctx.session.views || 1;
  await next();
});

router
  .get('/api/counter', async (ctx, next) => {
    ctx.body = ctx.session.views;
  })
  .get('/api/reviews', async (ctx, next) => {
     ctx.body = reviews;
     // console.log(ctx.body);
  })
  .post('/api/reviews', async (ctx, next) => {
    console.log('post');
    console.log(ctx.request.body);
    const review = Joi.validate(ctx.request.body, schema);
    ctx.assert(!review.error, 400);
    reviews.push(review.value);
    console.log('_________________');
    console.log(reviews);
  });

app.use(koaWebpack({
  compiler: webpack(webpackConfig),
  dev: {
    publicPath: webpackConfig.output.publicPath,
  }
}));

// app.use(serve('./client'));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
