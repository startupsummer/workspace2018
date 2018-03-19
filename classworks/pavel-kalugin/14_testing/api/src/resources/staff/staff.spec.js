const factory = require('./staff.factory');
const { signin } = require('test/auth');
const db = require('db');

module.exports = function runTests(request) {
  let admin = {};
  let client = {};
  let token = {};

  describe('test staff', () => {
    before(async () => {
      await db.get('staff').drop();

      admin = await factory.admin();
      client = await factory.client();
      token = await signin(request, client);
    });

    after(async () => {
      await db.get('staff').drop();
    });

    it('should should let user to change his name', (done) => {
      request
        .put(`/api/staff/${client._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send(client)
        .expect(200, done);
    });

    it('user can\'t change others\' names', (done) => {
      request.put(`/api/staff/${admin._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send(admin)
        .expect(403, done);
    });
  });
};
