const staffFactory = require('../resources/staff/staff.factory');
const db = require('db');

module.exports = async function getUsers(request) {
  const users = {
    admin:
      staffFactory.create('firstNameAdmin,', 'lastName', 'admin@mail.com', 'password'),
    simple:
      staffFactory.create('firstNameSimple', 'lastName', 'simple@mail.com', 'password'),
  };
  await db.get('staff').drop();
  await new Promise((resolve, reject) => {
    request
      .post('/api/v1/accounts/signup')
      .send(users.admin)
      .end((error, response) => {
        resolve();
      });
  });
  await new Promise((resolve, reject) => {
    request
      .post('/api/v1/accounts/signup')
      .send(users.simple)
      .end((error, response) => {
        resolve();
      });
  });
  await new Promise((resolve, reject) => {
    request
      .post('/api/v1/accounts/signin')
      .send(users.simple)
      .end((error, response) => {
        users.simple.token = response.body.token;
        users.simple.id = response.body.user._id;
        resolve();
      });
  });
  await new Promise((resolve, reject) => {
    request
      .post('/api/v1/accounts/signin')
      .send(users.admin)
      .end((error, response) => {
        users.admin.token = response.body.token;
        users.admin.id = response.body.user._id;
        resolve();
      });
  });
  await new Promise((resolve, reject) => {
    request
      .put(`/api/v1/staff/${users.simple.id}`)
      .set('Authorization', `Bearer ${users.admin.token}`)
      .send({ ...users.simple, isAdmin: false })
      .end((error, response) => {
        resolve();
      });
  });
  return users;
};
