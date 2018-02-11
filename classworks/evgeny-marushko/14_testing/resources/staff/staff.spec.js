const usersCreator = require('../../tests/staffCreator');
const db = require('db');

module.exports = function test(request) {
  let users;
  describe('14task', () => {
    before(async () => {
      users = await usersCreator(request);
    });

    after(async () => {
      await db.get('staff').drop();
    });

    it('simple user should be able to change their fields', (done) => {
      request
        .put(`/api/v1/staff/${users.simple.id}`)
        .set('Authorization', `Bearer ${users.simple.token}`)
        .send(users.simple)
        .expect(200, done);
    });
    it('simple user should not update the fields of another user', (done) => {
      request
        .put(`/api/v1/staff/${users.admin.id}`)
        .set('Authorization', `Bearer ${users.simple.token}`)
        .send(users.admin)
        .expect(403, done);
    });
  });
};
