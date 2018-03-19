const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const user = {
  email: 'batman@gmail.com',
  password: 'gotham123',
}

const schema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router
  .post('/api/v1/account/login', async (ctx, next) => {
    const validation = Joi.validate(ctx.request.body, schema);
    ctx.assert(!validation.error, 400);
    const {
      email,
      password,
    } = ctx.request.body;
    if ((email === user.email) && (password === user.password)){
      const token = jwt.sign(user, 'shhhhh');
      ctx.body = token;
    }
  })
  .get('/api/v1/me', async (ctx, next) => {
    try {
      const decoded = jwt.verify(ctx.headers['access-token'], 'shhhhh');
      ctx.body = decoded;
    } catch(error) {
      ctx.status = 401;
    }
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(3000);
