const { idGenerator } = require('@paralect/node-mongo');

const errorMessages = require('app.errorMessages');

const staffService = require('./staff.service');
const validators = require('./validators');

exports.byId = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin() ||
    ctx.state.user._id === ctx.params.id,
    403, errorMessages.authorization.permission,
  );

  const staff = await staffService.findById(ctx.params.id);
  ctx.assert(staff, 404, errorMessages.staff.notFound);

  ctx.body = staff;
};

exports.create = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin(),
    403, errorMessages.authorization.permission,
  );

  const result = await validators.staff.validate(ctx);
  ctx.assert(!result.errors, 400);

  const staffData = result.value;
  staffData._id = idGenerator.generate();

  const staff = await staffService.create(staffData);
  ctx.body = staff;
};

exports.update = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin() ||
    ctx.state.user._id === ctx.params.id,
    403, errorMessages.authorization.permission,
  );

  const result = await validators.staff.validate(ctx);
  ctx.assert(!result.errors, 400);

  const staffData = result.value;

  const newStaff = await staffService.findOneAndUpdate(
    { _id: ctx.params.id },
    {
      $set: {
        email: staffData.email,
        passwordHash: staffData.passwordHash,
        passwordSalt: staffData.passwordSalt,
        firstName: staffData.firstName,
        lastName: staffData.lastName,
        isAdmin: staffData.isAdmin,
        signupToken: staffData.signupToken,
      },
    },
    { returnOriginal: false },
  );

  ctx.body = newStaff;
};
