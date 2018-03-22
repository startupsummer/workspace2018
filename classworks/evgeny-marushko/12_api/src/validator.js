const Joi = require('joi');

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required()
});

module.exports = (body) => {
  return Joi.validate(body, schema, { abortEarly: false }).error;
}
