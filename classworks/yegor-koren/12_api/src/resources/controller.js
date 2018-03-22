const validation = require('../utils/validation');
const auth = require('../utils/auth');
const jwt = require('../utils/jwt');
const config = require('../../config');

const login = async (ctx, next) => {
  const valid = validation(ctx.request.body);
  ctx.assert(!valid.error, 400);

  if (auth(valid.value)) {
      const token = jwt.createToken(valid.value);
      ctx.body = token;
  }
}

const getMe = async (ctx, next) => {
  const decoded = jwt.verifyToken(ctx.headers['access-token']);
  if (decoded !== null) ctx.body = decoded;
  else ctx.status = 401;
}

module.exports = {
  login,
  getMe,
}
