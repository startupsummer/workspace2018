const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const webpack = require('koa-webpack');
const session = require('koa-session');
const { join } = require('path');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.keys = ['some secret hurr'];

const Joi = require('joi');

const schema = Joi.object().keys({
    surname: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().alphanum(),
    descr: Joi.string(),
    number: Joi.number().integer().min(1).max(10),
  });

// Return result.
// result.error === null -> valid

// You can also pass a callback which will be called synchronously with the validation result.

let wowObjects = [];

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));

app.use(bodyParser());

app.use(serve(join(__dirname, '../client/')));

router
  .get('/count', ctx => {
    if (!ctx.session.views) ctx.session.views = 0;
    ctx.session.views++;

    ctx.body = ctx.session.views;
  })
  .post('/postForm', ctx => {
    const result = Joi.validate(ctx.request.body, schema);
    if (!result.error)
      wowObjects.push(result.value);
    else
      console.log('Validation Error');
  })
  .get('/reviews', ctx => {
    ctx.body = wowObjects;
  })

app.use(router.routes());

app.listen(3000);
