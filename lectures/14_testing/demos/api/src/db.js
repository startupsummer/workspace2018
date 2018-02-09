const config = require('config');
const db = require('@paralect/node-mongo').connect(config.mongo.connection);

db.setQueryServiceMethod('findById', (service, id) => {
  return service.findOne({ _id: id });
});

db.setQueryServiceMethod('findByIds', (service, ids) => {
  return service.find({
    _id: { $in: ids },
  });
});

module.exports = db;
