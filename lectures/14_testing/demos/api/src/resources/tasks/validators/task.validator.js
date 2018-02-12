const Joi = require('joi');

const baseValidator = require('resources/base.validator');

const schema = {
  _id: Joi.string(),
  title: Joi.string().required(),
  description: Joi.string().allow(''),
};

exports.validate = ctx => baseValidator(ctx, schema, (data) => {
  return data;
});
