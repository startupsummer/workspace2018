const bodyParser = require('koa-bodyparser');
const validate = require('./validator.js');
const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const config = require('./config.js');
const auth = require('basic-auth');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.post('/api/v1/account/login', ctx => {
  const payload = validate(ctx.request.body);

  if (!payload.error) {
    const token = jwt.sign({
      data: payload.value,
    }, config.secret, config.timeLimit);

    ctx.status = 200;
    ctx.body = token;
  } else {
    ctx.status = 400;
    ctx.body = payload.error.details[0].message;     
  }
})

router
  .get('/api/v1/me', ctx => {
    const token = ctx.request.header['x-access-token']
    const user = jwt.verify(token, config.secret).data; 

    if (validate(user).error) {
      ctx.status = 401;
    } else {
      ctx.status = 200;
      ctx.body = user;
    }
  })

app.use(router.routes());

app.listen(config.port);
