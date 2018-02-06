const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();
require('./config/koa')(app);

app.keys = ['some secret hurr'];

app.use(session(app));
app.use(ctx => {
  let session = ctx.session;
  session.count = session.count || 0;
  session.count++;
  ctx.body = 'Number of sessions: ' + session.count;
});


app.listen(3000);
