const mount = require('koa-mount');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    app.use(mount('/api/v1/me', async ctx => {
        const token = ctx.request.header.authorization.replace('Bearer ', '');

        ctx.body = jwt.verify(token, 'my-secret');
    }));

};