const bodyParser = require('koa-bodyparser');
const routes = require('./routes/');

module.exports = (app) => {
	app.use(bodyParser());
	routes(app);
};