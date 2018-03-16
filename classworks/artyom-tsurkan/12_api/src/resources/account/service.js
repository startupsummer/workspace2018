const jwt = require('jsonwebtoken');
const config = require('../../../config');

createToken = ({ email, password }) => {
    const payload = {
        email: email,
        password: password
    };

    return jwt.sign(payload, config.secret, config.expireTime);
};

module.exports = {
    createToken
};