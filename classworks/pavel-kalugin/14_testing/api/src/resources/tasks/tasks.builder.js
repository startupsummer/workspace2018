// // Example of task
// {
//   _id: '11',
//   createrId: '1',
//   title: 'Learn testing',
//   description: 'Learn how to write tests for REST api server.',
//   participatorIds: []
// }

const BaseBuilder = require('tests/base.builder');
const service = require('./tasks.service');


class TasksBuilder extends BaseBuilder {
  constructor() {
    super(service);
    this.data = {};

    this.data._id = (Math.random() * 10000).toFixed;
    this.data.participatorsIds = [];
  }

  title(title) {
    this.data.title = title;
    return this;
  }

  description(description) {
    this.data.description = description;
    return this;
  }

  creatorId(id) {
    this.data.creatorId = id;
    return this;
  }
}

module.exports = TasksBuilder;
