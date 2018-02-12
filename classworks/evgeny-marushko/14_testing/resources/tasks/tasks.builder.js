const BaseBuilder = require('tests/base.builder');
const tasksService = require('./tasks.service');

class TasksBuilder extends BaseBuilder {
  constructor() {
    super(tasksService);
    this.data.createdOn = Date.now();
    this.data.participatorIds = [];
    this.data.imageFileName = null;

    this.title('title');
    this.description('description');
    this.createrId(null);
  }
  title(title) {
    this.data.title = title;
    return this;
  }
  description(description) {
    this.data.description = description;
    return this;
  }
  createrId(createrId) {
    this.data.createrId = createrId;
    return this;
  }
}

module.exports = TasksBuilder;
