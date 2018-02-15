exports.signin = (request, user, password = 'qwerty') => {
  return new Promise((resolve, reject) => {
    request
      .post('/api/v1/accounts/signin')
      .send({
        email: user.email,
        password,
      })
      .end((err, res) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(res.body.token);
      });
  });
};
