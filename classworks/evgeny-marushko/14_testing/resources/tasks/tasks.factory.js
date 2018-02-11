const TasksBuilder = require('./tasks.builder');

exports.create = (title, description) => {
  const tasksBuilder = new TasksBuilder();
  const task = tasksBuilder
    .title(title)
    .description(description)
    .build();
  return task;
}
