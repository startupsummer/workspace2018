const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const session = require('koa-session');
const { join } = require('path');
const bodyParser = require('koa-bodyparser');
const Joi = require('joi');
const config = require('./web/client/webpack.config.js');

const app = new Koa();
const router = new Router();
let reviews = [];
const compiler = webpack(config);

app.use(bodyParser());
app.keys = ['some secret hurr'];

const schema = Joi.object().keys({
  name: Joi.string().alphanum(),
  surname: Joi.string().alphanum().min(1).required(),
  description: Joi.string(),
  number: Joi.number().integer().min(0).max(10),
});

app.use(session(app));

app.use( async (ctx, next) => {
  console.log(ctx.path)
  if(ctx.path === '/build/index.html') {
    ctx.session.views++;
  }
  await next();
})

app.use(koaWebpack({compiler}))

// app.use(serve(join(__dirname, '/web/client/')));

router
  .get('/views', ctx => {
    ctx.body = ctx.session.views;
  })
  .post('/reviews', ctx => {
    const result = Joi.validate(ctx.request.body, schema);
    if (!result.error)
      reviews.push(result.value);
    else
      console.log(result.error);
      ctx.throw(400,'Error Message');
  })
  .get('/reviews', ctx => {
    ctx.body = reviews;
  })

app.use(router.routes());

app.listen(3000);
