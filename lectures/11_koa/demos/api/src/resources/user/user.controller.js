const userService = require('./user.service');
const validators = require('./validators');

exports.getCurrent = async (ctx, next) => {
  const user = await userService.getUser();
  ctx.body = user;
};

exports.updateCurrent = async (ctx, next) => {
  const result = await validators.update.validate(ctx);
  ctx.assert(!result.errors, 400);

  const { value: userData } = result;
  const user = await userService.update(userData);

  ctx.body = user;
};
