const Koa = require('koa');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();
require('./config/koa')(app);

app.keys = ['some secret hurr'];

app.use(session(app));
app.use(bodyParser());
app.use(async (ctx, next) => {
  if (ctx.path === '/') {
    let session = ctx.session;
    session.count = session.count || 0;
    session.count++;
    ctx.body = 'Number of sessions: ' + session.count;
  }
  await next();
});

app.use(serve(__dirname + '/src/web/client'));

router
  .post('/api/form-data', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = 'all right';
  });

app.listen(3000);
