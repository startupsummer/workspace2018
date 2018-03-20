const TasksBuilder = require('./tasks.builder');

exports.createTask = async (creatorId) => {
  const tasksBuilder = new TasksBuilder();
  const task = await tasksBuilder.creatorId(creatorId).build();

  return task;
};
