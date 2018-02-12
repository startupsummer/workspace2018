

const controller = require('./controller');
const router = require('koa-router')();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.put('/:id')

module.exports = router.routes();
