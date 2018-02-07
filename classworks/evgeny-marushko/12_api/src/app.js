const Koa = require('koa');
const jwt = require('jsonwebtoken');
const kjwt = require('koa-jwt');
const Router = require('koa-router');
const Joi = require('joi');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const schema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string().min(6).max(30)
});

app.use(bodyParser());
router
  .post('/api/v1/account/login', (ctx, next) => {
    console.log(jwt.sign({field: "pls"}, 'secret'));
    ctx.body = ctx.request.body;
    const result = Joi.validate(ctx.request.body, schema);
    if (result.error != null) {
      const errArray = [];
      result.error.details.forEach(item => errArray.push(item.message));
      ctx.body = errArray;
      ctx.status = 400;
    }
    ctx.body = new String(jwt.sign(ctx.request.body, 'secret'));
  })
  .post('/api/v1/me', (ctx, next) => {
    const token =
      ctx.request.body.token ||
      ctx.query.token ||
      ctx.request.headers['x-access-token'];
    jwt.verify(token, 'secret', function (err, decoded) {
      if (err) {
        ctx.body = { error: err.message };
      } else {
        ctx.body = decoded;
      }
    })
  });



app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3000);
