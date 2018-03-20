const Joi = require('joi');
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');
const config = require('../../../config');

const schema = Joi.object().keys({
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email().required()
});

const db = [];

const authentificate = async (ctx, next) => {
  const token = ctx.request.header['x-access-token'];
  const user = jwt.verify(token, config.secret);

  if (user) {
    ctx.body = user;
  } else {
    ctx.throw(401);
  }
};

const login = async (ctx, next) => {
  const login = Joi.validate(ctx.request.body, schema);
  ctx.assert(!login.error, 400);

  const { password, email } = login.value;

  const authorizedUser = db.find((user) => user.email === email);
  if (authorizedUser) {
    if (passwordHash.verify(password, authorizedUser.hash)) {
      const token = jwt.sign({ email }, config.secret);
      ctx.body = token;
    } else {
      ctx.throw(400);
    }
  } else {
    const hash = passwordHash.generate(password);
    const newUser = { hash, email };
    db.push(newUser);

    const token = jwt.sign({ email }, config.secret);
    ctx.body = token;
  }
};

module.exports = {
  authentificate,
  login,
};
