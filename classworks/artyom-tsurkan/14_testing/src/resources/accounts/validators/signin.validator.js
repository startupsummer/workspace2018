const Joi = require('joi');

const userService = require('resources/staff/staff.service');
const baseValidator = require('resources/base.validator');

const securityUtil = require('security.util');

const incorrectCredentials = 'Incorrect email or password.';

const schema = {
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .trim()
    .lowercase()
    .options({
      language: {
        any: { empty: '!!Email is required' },
        string: { email: '!!Please enter a valid email address' },
      },
    }),
  password: Joi.string()
    .trim()
    .options({
      language: {
        any: { empty: '!!Password is required' },
      },
    }),
};

exports.validate = ctx => baseValidator(ctx, schema, async (data) => {
  const user = await userService.findOne({ email: data.email });
  if (!user) {
    ctx.errors.push({ credentials: incorrectCredentials });
    return false;
  }

  const isPasswordMatch = await securityUtil.compareTextWithHash(
    data.password,
    user.passwordHash,
    user.passwordSalt,
  );

  if (!isPasswordMatch) {
    ctx.errors.push({ credentials: incorrectCredentials });
    return false;
  }

  return data;
});
