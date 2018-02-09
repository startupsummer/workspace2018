const TaskBuilder = require('../builders/task.builder');

exports.create = (title, description) => {
  const taskBuilder = new TaskBuilder();
  const task = taskBuilder
    .title(title)
    .description(description)
    .build();
  return task;
}
