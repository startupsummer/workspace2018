const controller = require('./controller');

module.exports = (router) => {
	router.post(
		'/api/v1/account/login',
		(ctx, next) => controller.validate(ctx, next),
		(ctx, next) => controller.handleInputErrors(ctx, next),
		(ctx) => controller.getToken(ctx),
	)
		.get(
			'/api/v1/me',
			(ctx) => controller.verifyToken(ctx),
		);
};
