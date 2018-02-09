const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
const Joi = require('joi');

const app = new Koa();
const router = new Router();

const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
};

app.use(bodyParser());

app
.use(router.routes())
.use(router.allowedMethods());

router.post(
  '/api/v1/account/login',
  (ctx, next) => {
    ctx.body = ctx.request.body;
    ctx.result = Joi.validate(ctx.body, schema, {abortEarly: false});
    next();
  },
  (ctx, next) => {
    if (ctx.result.error !== null) {
      const errors = [];
      ctx.result.error.details.forEach(error => errors.push(error.message));
      ctx.body = errors;
      ctx.status = 400;
    }
    else {
      next();
    }
  },
  (ctx) => {
    ctx.body = {token: jwt.sign(ctx.request.body, config.secret)};
  }
)
.get(
  '/api/v1/me',
  (ctx) => {
    jwt.verify(ctx.request.headers['token'], config.secret, (err, decoded) => {
      ctx.body = decoded || err.message;
    })
  }
);

app.listen(config.port, () => console.log(`Listening to port ${config.port}.`));