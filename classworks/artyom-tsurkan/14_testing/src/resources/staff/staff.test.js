const db = require('db');

const staffFactory = require('./staff.factory');
const {signin} = require('tests/auth');

module.exports = function test(request) {
    describe('/staff', () => {
        let admin, client, adminToken, clientToken, taskAdmin, task, task2, task3;

        before(async () => {
            await db.get('staff').drop();

            [admin, client] = await Promise.all([
                staffFactory.admin(),
                staffFactory.client()
            ]);

            [adminToken, clientToken] = await Promise.all([
                signin(request, admin),
                signin(request, client),
            ]);
        });

        it('*5* client-user update their own names => expect 200', (done) => {
            request.put(`/api/v1/staff/${client._id}`)
            .set('Authorization', `Bearer ${clientToken}`)
            .send(client)
            .expect(200, done);
        });

        it('*6* client-user update another names => expect 403', (done) => {
            request.put(`/api/v1/staff/${admin._id}`)
            .set('Authorization', `Bearer ${clientToken}`)
            .send(admin)
            .expect(403, done);
        });

        after(async () => {
            await db.get('staff').drop();
        });
    });
};