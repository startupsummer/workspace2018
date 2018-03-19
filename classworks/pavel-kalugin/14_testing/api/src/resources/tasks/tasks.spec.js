const chai = require('chai');

const db = require('db');
const { signin } = require('tests/auth');
const taskFactory = require('./tasks.factory');
const staffFactory = require('../staff/staff.factory');

chai.should();

module.exports = function test(request) {
  let admin = {};
  let client = {};
  let adminToken = {};
  let clientToken = {};
  let task;

  describe('test tasks', () => {
    before(async () => {
      await db.get('staff').drop();
      await db.get('tasks').drop();
      admin = await staffFactory.admin();
      client = await staffFactory.client();

      adminToken = await signin(request, admin);
      clientToken = await signin(request, client);
      task = await taskFactory.create(admin._id);
    });

    it('returns 403 when user is trying to create a task', (done) => {
      request
        .post('/api/tasks')
        .send({
          title: 'Lorem',
          description: 'Ipsum',
        })
        .set('Authorization', `Bearer ${clientToken}`)
        .expect(403, done);
    });

    it('give admin a task after he has created it', (done) => {
      request
        .put(`/api/tasks/${task._id}`)
        .send({
          title: 'Finish all tasks',
          description: 'It\'s hard :c',
        })
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200)
        .expect((response) => {
          response.body.title.should.be.equal('Finish all tasks');
          response.body.description.should.be.equal('It\'s hard :c');
        })
        .end(done);
    });

    it('allows admin to be able to add participators to a task', (done) => {
      request
        .post(`/api/tasks/${task._id}/participators/${client._id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200, done);
    });

    it('ащкишв client to add participators to a task', (done) => {
      request
        .post(`/api/tasks/${task._id}/participators/${admin._id}`)
        .set('Authorization', `Bearer ${clientToken}`)
        .expect(403, done);
    });
  });

  after(async () => {
    await db.get('tasks').drop();
    await db.get('staff').drop();
  });
};
