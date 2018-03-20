const controller = require('./controller');

module.exports = (router) => {
  router.get('/api/v1/me', controller.authentificate);
  router.post('/api/v1/account/login', controller.login);
}
