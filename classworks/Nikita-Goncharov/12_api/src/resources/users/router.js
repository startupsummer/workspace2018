const controller = require('./controller');

module.exports = (router) => {
	router.post('/api/v1/account/login', controller.login);
	router.get('/api/v1/me', controller.authentificate);
};
