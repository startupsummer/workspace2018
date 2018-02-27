const faker = require('faker');

const BaseBuilder = require('tests/base.builder');
const tasksService = require('./tasks.service');

class TasksBuilder extends BaseBuilder {
  constructor() {
    super(tasksService);
    this.data.participatorIds = [];
    this.data.imageFileName = null;
    this.data.createdOn = Date.now();

    this.title(faker.name.title());
    this.description(faker.lorem.paragraph());
    this.createrId(null);
  };

  title(title) {
    this.data.title = title;
    return this;
  };

  description(description) {
    this.data.description = description;
    return this;
  };

  createrId(createrId) {
    this.data.createrId = createrId;
    return this;
  };
}

module.exports = TasksBuilder;
