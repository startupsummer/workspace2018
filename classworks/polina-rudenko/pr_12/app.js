const Koa = require('koa');
const Router = require('koa-router');
const Joi = require('joi');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');

const app = new Koa();
const router = new Router();

const tokens =[];

const schema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});

app.use(bodyParser());

router.get('/api/v1/me', async (ctx, next) => {
  console.log(ctx.request.header.authorization);
  if (tokens.includes(ctx.request.header.authorization)) {
    ctx.body = jwt.verify(ctx.request.header.authorization, 'secret')
  }
  else
  {
    ctx.status = 401;
  }
});

router.post('/api/v1/account/login', async (ctx, next) => {
  const login = Joi.validate(ctx.request.body, schema);
  ctx.assert(!login.error, 400);
  const token = jwt.sign(login.value, 'secret');
  tokens.push(token);
  ctx.body = token;
});

app.use(router.routes())

app.listen(3000);
