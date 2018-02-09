module.exports = function(request, token) {
  describe(`Change profile`, function() {
    it('respond with json', function(done) {
      request
        .post('/api/v1/tasks')
        .send({
          title: "title",
          discription: "discription"
        })
        .set('Authorization', `Bearer ${token}`)
        .expect(403, done);
    });
  });
};
