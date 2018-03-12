const Joi = require('joi');

const schema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string().regex(/^[A-z0-9\_]+$/).min(8).max(32),
});

module.exports = { 
  validate: data => Joi.validate(data, schema, { abortEarly: false }),
};
