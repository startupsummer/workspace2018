const Joi = require('joi');

const schema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});

module.exports = (body) => {
  return Joi.validate(body, schema);
}
