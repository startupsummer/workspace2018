module.exports = function(request, userId, token) {
  describe(`Change profile`, function() {
    it('respond with json', function(done) {
      request
        .put(`/api/v1/staff/${userId}`)
        .send({
          firstName: 'test-test',
          lastName: 'test-test',
          password: 'test-test',
        })
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });
  });
};
