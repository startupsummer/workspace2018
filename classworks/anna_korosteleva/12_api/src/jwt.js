const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = {
  generateToken: function(body) {
    return jwt.sign(body, config.secret)
  },
  verifyUser: function(token) {
    return (
      jwt.verify(token, config.secret, (err, decoded) => 
        err ? null : decoded
      )
    )
  },
}