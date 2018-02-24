const bodyParser = require('koa-bodyparser');
const validate = require('./validator.js');
const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const config = require('./config.js');
const auth = require('basic-auth');

const app = new Koa();
const router = new Router();

let db = [];

app.use(bodyParser());

router.post('/api/v1/account/login', ctx => {
  const payload = validate(ctx);

  if (!payload.error) {
    const token = jwt.sign({
      data: payload.value,
    }, config.secret, config.timeLimit);

    db = [...db, {...payload.value, token}],
    ctx.status = 200;
    ctx.body = token;
  } else {
    ctx.status = 400;
    ctx.body = payload.error.details[0].message;     
  }
})

router
  .get('/api/v1/me', (ctx, next) => {
    const user = auth(ctx.request);
    const dbUser = db.find(item => item.email === user.name);
    if (dbUser && dbUser.password === user.pass) {
        ctx.status = 200;
        ctx.token = dbUser.token;
        next();
    } else {
        ctx.status = 401;
    }
  }, ctx => {
    ctx.body = jwt.verify(ctx.token, config.secret);  
  })

app.use(router.routes());

app.listen(config.port);
