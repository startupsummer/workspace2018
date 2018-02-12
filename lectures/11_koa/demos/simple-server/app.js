const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('first middleware');
  await next();
  console.log('end of the first middleware');
  ctx.body = 'Hello world';
});

app.use(async (ctx, next) => {
  console.log('second middleware');
  await next();
  console.log('end of the second middleware');
});

app.use(async (ctx, next) => {
  console.log('third middleware');
  await next();
  console.log('end of the third middleware');
});

app.listen(3000);
