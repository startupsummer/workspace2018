const chai = require('chai');

const taskFactory = require('./tasks.factory');
const staffFactory = require('../staff/staff.factory');
const { signin } = require('tests/auth');
const db = require('db');

chai.should();

module.exports = function test(request) {
  const users = {};
  let task;
  describe('14task', () => {
    before(async () => {
      await db.get('staff').drop();
      await db.get('tasks').drop();
      users.admin = await staffFactory.admin();
      users.simple = await staffFactory.simple();
      users.admin.token = await signin(request, users.admin);
      users.simple.token = await signin(request, users.simple);
      task = await taskFactory.create(users.admin._id);
    });

    after(async () => {
      await db.get('tasks').drop();
      await db.get('staff').drop();
    });

    it('simple user when creating a task should get 403 error', (done) => {
      request
        .post('/api/v1/tasks')
        .send({
          title: 'title',
          discription: 'discription',
        })
        .set('Authorization', `Bearer ${users.simple.token}`)
        .expect(403, done);
    });
    it('admin should change task and get it in response', (done) => {
      request
        .put(`/api/v1/tasks/${task._id}`)
        .send({
          title: 'new_title',
          description: 'new_description',
        })
        .set('Authorization', `Bearer ${users.admin.token}`)
        .expect(200)
        .expect((res) => {
          res.body.title.should.be.equal('new_title');
          res.body.description.should.be.equal('new_description');
        })
        .end(done);
    });
    it('admin should add participants to task', (done) => {
      request
        .post(`/api/v1/tasks/${task._id}/participators/${users.simple._id}`)
        .set('Authorization', `Bearer ${users.admin.token}`)
        .expect(200, done);
    });
    it('simple user should not add participants to task', (done) => {
      request
        .post(`/api/v1/tasks/${task._id}/participators/${users.admin._id}`)
        .set('Authorization', `Bearer ${users.simple.token}`)
        .expect(403, done);
    });
  });
};
