const validator = require('./validator.js');
const service = require('./service.js');

login = async (ctx) => {
    const validatedUser = await validator.login(ctx);
    const token = await service.createToken(validatedUser);

    ctx.body = { token };
}

module.exports = {
    login
};