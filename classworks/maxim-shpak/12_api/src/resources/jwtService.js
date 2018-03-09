const jwt = require('jsonwebtoken');
const config = require('../../config/index');

module.exports = {
    generateToken: data => jwt.sign(data, config.secretKey),
    verifyUser: token => jwt.verify(token, config.secretKey, 
      (error, data) => error ? null : data),
};
