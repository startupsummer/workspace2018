const chai = require('chai');

const db = require('db');
const { signin } = require('tests/auth');
const taskFactory = require('./tasks.factory');
const staffFactory = require('../staff/staff.factory');

chai.should();

module.exports = function test(request) {
  const users = {};
  let task;
  describe('test tasks', () => {
    before(async () => {
      await db.get('staff').drop();
      await db.get('tasks').drop();
      users.admin = await staffFactory.admin();
      users.client = await staffFactory.client();
      users.admin.token = await signin(request, users.admin);
      users.client.token = await signin(request, users.client);
      task = await taskFactory.create(users.admin._id);
    });

    after(async () => {
      await db.get('tasks').drop();
      await db.get('staff').drop();
    });

    it('client gets 403 when trying to create a task', (done) => {
      request
      .post('/api/v1/tasks')
      .send({
        title: 'Lorem',
        description: 'Ipsum',
      })
      .set('Authorization', `Bearer ${users.client.token}`)
      .expect(403, done);
    });

    it('admin gets a task after creating it', (done) => {
      request
      .put(`/api/v1/tasks/${task._id}`)
      .send({
        title: 'Admin lorem',
        description: 'Admin ipsum',
      })
      .set('Authorization', `Bearer ${users.admin.token}`)
      .expect(200)
      .expect((res) => {
        res.body.title.should.be.equal('Admin lorem');
        res.body.description.should.be.equal('Admin ipsum');
      })
      .end(done);
    });

    it('admin is able to add task participators', (done) => {
      request
      .post(`/api/v1/tasks/${task._id}/participators/${users.client._id}`)
      .set('Authorization', `Bearer ${users.admin.token}`)
      .expect(200, done);
    });

    it('client is not able to add task participators', (done) => {
      request
      .post(`/api/v1/tasks/${task._id}/participators/${users.admin._id}`)
      .set('Authorization', `Bearer ${users.client.token}`)
      .expect(403, done);
    });
  });
};
