module.exports = function(request, taskId, token) {
  describe(`Update task`, function() {
    it('respond with json', function(done) {
      request
        .put(`/api/v1/tasks/${taskId}`)
        .send({
          title: 'test-title',
        })
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res) {
          if(res.body._id === taskId) {
            done();
          }
        });
    });
  });
};
