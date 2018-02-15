const TasksBuilder = require('./tasks.builder');

exports.create = (createrId) => {
    const tasksBuilder = new TasksBuilder();
    const task = tasksBuilder
        .createrId(createrId)
        .build();
    return task;
};