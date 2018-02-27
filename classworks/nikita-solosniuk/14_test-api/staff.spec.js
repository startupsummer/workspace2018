const factory = require('./staff.factory');
const { signin } = require('test/auth');
const db = require('db');


module.exports = function test(request) {
  const users = [];
  describe('test staff', () => {
    before(async () => {
      await db.get('staff').drop();
      users.admin = await factory.admin();
      users.client = await factory.client();
      users.admin.token = await signin(request, users.admin);
      users.client.token = await signin(request, users.client);
    });

    after(async () => {
      await db.get('staff').drop();
    });

    it('user can change his own name', (done) => {
      request
        .put(`/api/v1/staff/${users.client._id}`)
        .set('Authorization', `Bearer ${users.client.token}`)
        .send(users.client)
        .expect(200, done);
    });

    it('user can\'t change others\' names', (done) => {
      request.put(`/api/v1/staff/${users.admin._id}`)
        .set('Authorization', `Bearer ${users.client.token}`)
        .send(users.admin)
        .expect(403, done);
    });
  });
};
