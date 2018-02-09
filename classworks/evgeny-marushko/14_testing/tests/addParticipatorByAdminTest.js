module.exports = function(request, token, tastId, userId) {
  describe(`Change profile`, function() {
    it('respond with json', function(done) {
      request
        .post(`/api/v1/tasks/${tastId}/participators/${userId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });
  });
};
