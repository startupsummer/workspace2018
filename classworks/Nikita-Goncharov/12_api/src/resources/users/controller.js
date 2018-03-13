
const jwt = require('jsonwebtoken');
const config = require('../../../config');
const Joi = require('joi');


const schema = {
	email: Joi.string().email().required(),
	password: Joi.string().min(8).max(20).required(),
};

const validate = (ctx, next) => {
	ctx.body = ctx.request.body;
	ctx.result = Joi.validate(ctx.body, schema, {abortEarly: false});
	next();
};

const processErrors = (ctx, next) => {
	if (ctx.result.error) {
		const errors = [];
		ctx.result.error.details.map(error => {
			errors.push(error.message);
		});
		ctx.body = errors;
		ctx.status = 400;
	}
	else {
		next();
	}
};

const generateToken = (ctx) => {
	ctx.body = {
		token: jwt.sign(ctx.request.body, config.secret)
	};
};

const login = (ctx, next) => {
	validate(ctx, next);
	processErrors(ctx, next);
	generateToken(ctx);
};

const authentificate = (ctx) => {
	const token = ctx.request.headers['token'];
	const secret = config.secret;
	jwt.verify(token, secret, (error, message) => ctx.body = message || error.message)
};

module.exports = {
	login,
	authentificate,
};
