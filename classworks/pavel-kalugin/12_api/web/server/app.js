const bodyParser = require('koa-bodyparser');
const Joi = require('joi');
const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const auth = require('basic-auth')

const app = new Koa();
const router = new Router();

const schema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
})

let db = [];

generateID = () => {
  return '' + Math.floor(Math.random() * 100000);
}

router
  .post('/api/v1/account/login', ctx => {
    const result = Joi.validate(ctx.request.body, schema);
    if (!result.error) {
      const token = jwt.sign({
        data: result.value,
      }, 'secret', { expiresIn: '1h' });

      db = [...db, {...result.value, token}],
      ctx.status = 200;
      ctx.body = token;
    } else {
      ctx.status = 400;
    }
  })
  .get('/api/v1/me', ctx => {
    const user = auth(ctx.request);
    const dbUser = db.find(item => item.email === user.name);
    if (dbUser && dbUser.password === user.pass) {
      ctx.status = 200;
      ctx.body = jwt.verify(dbUser.token, 'secret');
    } else {
      ctx.status = 401;
    }
  })

app.use(bodyParser());

app.use(router.routes());

app.listen(3000);
