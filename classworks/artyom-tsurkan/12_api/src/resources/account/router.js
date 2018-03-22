const controller = require('./controller');
const router = require('koa-router')();

router.post('/login', controller.login);

module.exports = router.routes();