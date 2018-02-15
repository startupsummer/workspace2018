const chai = require('chai');
const db = require('db');

const taskFactory = require('./tasks.factory');
const staffFactory = require('../staff/staff.factory');
const { signin } = require('tests/auth');

chai.should();

module.exports = function test(request) {
    describe('/tasks', () => {
        let admin, client, adminToken, clientToken, taskAdmin, task, task2, task3;

        before(async () => {
            await db.get('staff').drop();
            await db.get('tasks').drop();

            [admin, client] = await Promise.all([
                staffFactory.admin(),
                staffFactory.client()
            ]);

            [adminToken, clientToken] = await Promise.all([
                signin(request, admin),
                signin(request, client),
            ]);

            [task, task2, task3] = await Promise.all([
                taskFactory.create(admin._id),
                taskFactory.create(admin._id),
                taskFactory.create(admin._id),
            ]);

        });

        it('*4* admin-user create 3 tasks and get => expect 3 tasks', (done) => {
            request.get('/api/v1/tasks')
            .set('Authorization', `Bearer ${adminToken}`)
            .expect(200)
            .expect((res) => {
                res.body.count.should.be.equal(3);
            }).end(done);
        });

        it('*7* client-user create a task => expect 403', (done) => {
            request.post('/api/v1/tasks')
            .send({
                title: 'Learn testing',
                description: 'Learn how to write tests for REST api server.',
            })
            .set('Authorization', `Bearer ${clientToken}`)
            .expect(403, done);
        });

        it('*8* admin-user update a task => expect the updated task', (done) => {
            request.put(`/api/v1/tasks/${task._id}`)
            .send({
                title: 'Learn testing2',
                description: 'Learn how to write tests for REST api server.2',
            })
            .set('Authorization', `Bearer ${adminToken}`)
            .expect(200)
            .expect((res) => {
                res.body.title.should.be.equal('Learn testing2');
                res.body.description.should.be.equal('Learn how to write tests for REST api server.2');
            }).end(done);
        });

        it('*9* admin-user add participants to task => expect 200', (done) => {
            request.post(`/api/v1/tasks/${task._id}/participators/${client._id}`)
            .set('Authorization', `Bearer ${adminToken}`)
            .expect(200, done);
        });

        it('*10* client-user add participants to task => expect 403', (done) => {
            request.post(`/api/v1/tasks/${task._id}/participators/${admin._id}`)
            .set('Authorization', `Bearer ${clientToken}`)
            .expect(403, done);
        });

        after(async () => {
            await db.get('tasks').drop();
            await db.get('staff').drop();
        });
    });
};