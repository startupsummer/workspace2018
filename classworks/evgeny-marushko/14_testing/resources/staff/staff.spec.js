const factory = require('./staff.factory');
const { signin } = require('tests/auth');
const db = require('db');

module.exports = function test(request) {
  const users = {};
  describe('14task', () => {
    before(async () => {
      await db.get('staff').drop();
      users.admin = await factory.admin();
      users.simple = await factory.simple();
      users.admin.token = await signin(request, users.admin);
      users.simple.token = await signin(request, users.simple);
    });

    after(async () => {
      await db.get('staff').drop();
    });

    it('should successfully update user data', (done) => {
      request
        .put(`/api/v1/staff/${users.simple._id}`)
        .set('Authorization', `Bearer ${users.simple.token}`)
        .send(users.simple)
        .expect(200, done);
    });
    it('simple user should not update the fields of another user', (done) => {
      request
        .put(`/api/v1/staff/${users.admin._id}`)
        .set('Authorization', `Bearer ${users.simple.token}`)
        .send(users.admin)
        .expect(403, done);
    });
  });
};
