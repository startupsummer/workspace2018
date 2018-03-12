const Joi = require('joi');

const schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required()
});

module.exports = (body) => {
  return Joi.validate(body, schema);
}