const serve = require('koa-static');
const Koa = require('koa');
const Router = require('koa-router');
const Joi = require('joi');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const asyncBusboy = require('async-busboy');
const fs = require('fs');
const randomstring = require('randomstring');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');
const webpackConfig = require('./web/client/webpack.config');

const app = new Koa();
const router = new Router();

app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
};

const schema = Joi.object().keys({
  firstName: Joi.string().min(1).required(),
  lastName: Joi.string(),
  description: Joi.string().min(3).required(),
  rating: Joi.number().integer().positive(),
});

const reviews = [];

app.use(session(CONFIG, app));
app.use(bodyParser());
app.use(async (ctx, next) => {
  if (ctx.path === '/') {
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
  };
  await next();
});

app.use(koaWebpack({
  compiler: webpack(webpackConfig),
  hot: {},
  dev: {
    publicPath: webpackConfig.output.publicPath,
  },
}));

router
  .get('/api/views', (ctx, next) => {ctx.body = { views: ctx.session.views }})
  .get('/api/review', (ctx, next) => ctx.body = reviews )
  .post('/api/review', async (ctx, next) => {
    const data = await asyncBusboy(ctx.req);
    const result = Joi.validate(data.fields.review, schema);
    if (result.error != null) {
      const errArray = [];
      result.error.details.forEach(item => errArray.push(item.message));
      ctx.body = errArray;
      ctx.status = 400;
    } else {
      const review = JSON.parse(data.fields.review);
      if (data.files[0] != undefined) {
        let fileName = randomstring.generate();
        const splitArr = data.files[0].filename.split('.');
        fileName += '.' + splitArr[splitArr.length - 1];
        const writeStream = fs.createWriteStream(__dirname + '/web/uploads/' + fileName);
        data.files[0].pipe(writeStream);
        review.file = fileName;
      }
      reviews.push(review);
      ctx.status = 200;
    }
  });

app.use(serve(__dirname + '/web/client'));
app.use(serve(__dirname + '/web/uploads'));

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
