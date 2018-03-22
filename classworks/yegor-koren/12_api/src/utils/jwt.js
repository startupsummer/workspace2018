const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
  createToken: user => jwt.sign(user, config.secret),
  verifyToken: token => {
    try {
      return jwt.verify(token, config.secret);
    } catch(error) {
      return null;
    }
  },
}
