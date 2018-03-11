const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const session = require('koa-session');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');

const webpackConfig = require('./client/webpack.config.js');

const app = new Koa();
const router = new Router();

app.use(bodyParser());


// app.keys = ['some secret hmmmm'];

// app.use(serve('./client'));


// app.use(session(app));
//
// app.use(async (ctx, next) => {
//   if (ctx.path === '/') {
//     console.log('/');
//     ctx.session.views = ++ctx.session.views || 1;
//   }
//   await next();
// });
//
// router
//   .get('/counter', ctx => {
//     console.log('counter');
//     ctx.body = ctx.session.views;
//   })
//
//   app
//     .use(router.routes())
//     .use(router.allowedMethods());

app.use(koaWebpack({
  compiler: webpack(webpackConfig),
  dev: {
    publicPath: webpackConfig.output.publicPath,
  }
}));

app.listen(3000);
