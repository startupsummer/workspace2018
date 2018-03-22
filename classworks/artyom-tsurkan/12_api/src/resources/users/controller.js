const validator = require('./validator.js');
const service = require('./service.js');

getAll = async (ctx) => {
  const users = await service.getAll();

  ctx.body = users;
};

getById = async (ctx) => {
  const user = await service.getById(ctx.params.id);

  ctx.body = user;
};

create = async (ctx) => {
  const validatedUser = await validator.create(ctx);

  const user = await service.create(validatedUser);

  ctx.body = user;
}

module.exports = {
  getAll,
  getById,
  create,
}
