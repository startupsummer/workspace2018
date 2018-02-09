module.exports = function(request, anotherUserId, token) {
  describe(`Change another profile`, function() {
    it('respond with json', function(done) {
      request
        .put(`/api/v1/staff/${anotherUserId}`)
        .send({
          firstName: 'test-test',
          lastName: 'test-test',
          password: 'test-test',
        })
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(403, done);
    });
  });
};
