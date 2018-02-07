const jwt = require('jsonwebtoken');

createToken = ({ email, password }) => {
    const payload = {
        email: email,
        password: password
    };

    return jwt.sign(payload, 'my-secret', { expiresIn: 60*60*5  });
};

module.exports = {
    createToken
};