const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const validate = require('koa-validate');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const app = new Koa();
const router = new Router();
const port = 3000;

const schema = Joi.object().keys({
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email().required()
});

app.use(bodyParser());

const db = [];
const secret = 'shared-secret';

router.get('/api/v1/me', async (ctx, next) => {
  console.log(ctx);
  console.log(ctx.request.header.authorization);
  if (db.includes(ctx.request.header.authorization)) {

    ctx.body = jwt.verify(ctx.request.header.authorization, secret);
  } else {
    ctx.status = 401;
  }
});

router.post('/api/v1/account/login', async (ctx, next) => {
  const login = Joi.validate(ctx.request.body, schema);
  ctx.assert(!login.error, 400);
  const token = jwt.sign(login.value, secret);
  db.push(token);
  console.log(db);
  ctx.body = token;
});

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(port);

console.log('Listening to port ' + port);
