const webpack = require('webpack');
const config = require('../../webpack.config.js');
const koa = require('koa');
const compiler = webpack(config);
const middleware = require('koa-webpack');
const Joi = require('joi');
const Router = require('koa-router');
const bodyParser =require('koa-bodyparser');
const session = require('koa-generic-session');
const app = new koa();

app.use(middleware({
  compiler: compiler
}));

app.use(bodyParser());

app.use(session());

app.keys = ['cookies'];

const schema = Joi.object().keys({
  name: Joi.string().alphanum(),
  surname: Joi.string().alphanum().min(1),
  description: Joi.string().min(4),
  select: Joi.number().integer().min(0).max(10),
});

const reviewsList = [];

const router = new Router();

router
  .post('/form', async (ctx, next) => {
      const review = ctx.request.body;
      const result = Joi.validate(review, schema);
      if (!result.error) {
        reviewsList.push(result.value);
        console.log("Data is saved");
      }
      else {
        console.log(result.error);
        ctx.throw(400,'Error Message');
      }
  })
  .get('/reviews', ctx => {
    ctx.body = reviewsList;
  })
  .get('/counter', async (ctx, next) => {
      let session = ctx.session;
      session.count = session.count + 1;
      ctx.body = session.count;
  });

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(8081);
