const Joi = require('joi');

const userSchema = {
  _id: Joi.string(),
  createdOn: Joi.date(),
  firstName: Joi.string().allow(''),
  lastName: Joi.string(),
  email: Joi.string().email({ minDomainAtoms: 2 }),
};

module.exports = obj => Joi.validate(obj, userSchema, { allowUnknown: true });
