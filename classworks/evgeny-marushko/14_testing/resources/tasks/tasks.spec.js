const taskFactory = require('./tasks.factory');
const usersCreator = require('../../tests/staffCreator');
const db = require('db');

const task = taskFactory.create('testTask', 'testTask');

module.exports = function test(request) {
  let users;
  describe('14task', () => {
    before(async () => {
      users = await usersCreator(request);
      await db.get('tasks').drop();
      await new Promise((resolve, reject) => {
        request
          .post('/api/v1/tasks')
          .set('Authorization', `Bearer ${users.admin.token}`)
          .send(task)
          .end((error, response) => {
            task.id = response.body._id;
            resolve();
          });
      });
    });

    after(async () => {
      await db.get('tasks').drop();
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
        .put(`/api/v1/tasks/${task.id}`)
        .send({
          title: 'title',
          description: 'description',
        })
        .set('Authorization', `Bearer ${users.admin.token}`)
        .expect(200)
        .end((error, response) => {
          if (response.body._id === task.id) {
            done();
          }
        });
    });
    it('admin should add participants to task', (done) => {
      request
        .post(`/api/v1/tasks/${task.id}/participators/${users.simple.id}`)
        .set('Authorization', `Bearer ${users.admin.token}`)
        .expect(200, done);
    });
    it('respond with json', (done) => {
      request
        .post(`/api/v1/tasks/${task.id}/participators/${users.admin.id}`)
        .set('Authorization', `Bearer ${users.simple.token}`)
        .expect(403, done);
    });
  });
};
