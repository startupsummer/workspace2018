const Router = require('koa-router');
const router = new Router();

module.exports = (app) => {
	app.use(router.routes());
	app.use(router.allowedMethods());
	require('../../resources/users/router')(router);
};
