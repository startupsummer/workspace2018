const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = {
  generateToken: function(body) {
    return jwt.sign(body, config.secretKey);
  },
  verifyUser: function(token) {
    return (
      jwt.verify(token, config.secretKey, function (err, decoded) {
        if (err) {
          return null;
        } else {
          return decoded;
        }
      })
    )
  },
}
