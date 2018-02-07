const baseValidator = require('./../../utils/baseValidator.js');
const { isEmpty } = require('validator');

login = ctx => baseValidator(ctx, async () => {
const { email, password } = ctx.request.body;

if (!isEmpty(email) || !isEmpty(password) ) {
    ctx.errors.push({ name: "Both email and password must be specified" });
}

return {
    email,
    password
};
});

module.exports = {
    login
};