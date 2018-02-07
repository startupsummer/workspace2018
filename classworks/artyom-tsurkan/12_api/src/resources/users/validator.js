const baseValidator = require('./../../utils/baseValidator.js');
const { isEmpty, isEmail } = require('validator');

create = ctx => baseValidator(ctx, async () => {

  console.log(ctx.request.body)
  const { name, email } = ctx.request.body;

  if (name.length > 100) {
    ctx.errors.push({ name: "sdfsdf" })
  }

  if (!isEmail(email)) {
    ctx.errors.push({ name: 'Email is invalid!' });
  }

  return {
    name,
    email,
  };
});

module.exports = {
  create,
}
