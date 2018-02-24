const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('../../../config');

const schema = {
	email: Joi.string().email().required(),
	password: Joi.string().min(8).max(20).required(),
};

const validate = (ctx, next) => {
	ctx.body = ctx.request.body;
	ctx.result = Joi.validate(ctx.body, schema, {abortEarly: false});
	next();
};

const handleInputErrors = (ctx, next) => {
	if (ctx.result.error !== null) {
		const errors = [];
		ctx.result.error.details.forEach(error => errors.push(error.message));
		ctx.body = errors;
		ctx.status = 400;
	}
	else {
		next();
	}
};

const getToken = (ctx) => {
	ctx.body = {token: jwt.sign(ctx.request.body, config.secret)};
};

const verifyToken = (ctx) => {
	jwt.verify(ctx.request.headers['token'], config.secret, (err, decoded) => {
		ctx.body = decoded || err.message;
	})
};

module.exports = {
	validate,
	handleInputErrors,
	getToken,
	verifyToken,
};