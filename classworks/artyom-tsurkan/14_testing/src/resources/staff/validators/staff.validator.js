const Joi = require('joi');

const baseValidator = require('resources/base.validator');

const securityUtil = require('security.util');

const schema = {
  _id: Joi.string(),
  email: Joi.string().email({ minDomainAtoms: 2 }),
  password: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  isAdmin: Joi.boolean().default(false),
};

exports.validate = ctx => baseValidator(ctx, schema, async (data) => {
  const salt = await securityUtil.generateSalt();

  const [hash, signupToken] = await Promise.all([
    securityUtil.getHash(data.password, salt),
    securityUtil.generateSecureToken(),
  ]);

  return {
    firstName: data.firstName,
    lastName: data.lastName,
    passwordHash: hash.toString(),
    passwordSalt: salt.toString(),
    email: data.email,
    isAdmin: data.isAdmin,
    signupToken,
  };
});
