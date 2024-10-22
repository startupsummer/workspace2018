const _ = require('lodash');
const { idGenerator } = require('@paralect/node-mongo');

const tasksService = require('./tasks.service');
const staffService = require('resources/staff/staff.service');

const validators = require('./validators');

const errorMessages = require('app.errorMessages');

/**
 * @desc Get task information with additional fields
 * @param {object} task
 * @param {object[]} staffMembers
 * @return {object}
 */
const getTaskFullData = (task, staffMembers) => {
  const result = _.cloneDeep(task);

  const staffMember = staffMembers.find(staff => staff._id === task.createrId) || {};
  result.createrName = `${staffMember.firstName} ${staffMember.lastName}`;

  result.participators = staffMembers
    .filter(staff => task.participatorIds.includes(staff._id))
    .map(staff => ({
      _id: staff._id,
      fullName: `${staff.firstName} ${staff.lastName}`,
    }));
  delete result.participatorIds;

  return result;
};

exports.list = async (ctx, next) => {
  const tasks = await tasksService.list(ctx.query);

  const staffIds = [];
  tasks.results.forEach((task) => {
    staffIds.push(
      task.createrId,
      ...task.participatorIds,
    );
  });

  const staff = await staffService.findByIds(staffIds);
  const results = tasks.results.map(task => getTaskFullData(task, staff.results));

  ctx.body = {
    results,
    pagesCount: tasks.pagesCount,
    count: tasks.count,
  };
};

exports.byId = async (ctx, next) => {
  const task = await tasksService.findById(ctx.params.id);
  ctx.assert(task, 404, errorMessages.tasks.notFound);

  const staffIds = [
    task.createrId,
    ...task.participatorIds,
  ];
  const staff = await staffService.findByIds(staffIds);

  ctx.body = getTaskFullData(task, staff.results);
};

exports.create = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin(),
    403, errorMessages.authorization.permission,
  );

  const result = await validators.task.validate(ctx);
  ctx.assert(!result.errors, 400);

  const taskData = result.value;
  taskData._id = idGenerator.generate();
  taskData.createrId = ctx.state.user._id;
  taskData.participatorIds = [];
  taskData.imageFileName = null;

  const task = await tasksService.create(taskData);
  ctx.body = task;
};

exports.update = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin(),
    403, errorMessages.authorization.permission,
  );

  const task = await tasksService.findById(ctx.params.id);
  ctx.assert(task, 404, errorMessages.tasks.notFound);

  const result = await validators.task.validate(ctx);
  ctx.assert(!result.errors, 400);

  const taskData = result.value;
  const newTask = await tasksService.findOneAndUpdate(
    { _id: ctx.params.id },
    {
      $set: {
        title: taskData.title,
        description: taskData.description,
      },
    },
    { returnOriginal: false },
  );

  ctx.body = newTask;
};

exports.addParticipator = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin() ||
    ctx.state.user._id === ctx.params.staffId,
    403, errorMessages.authorization.permission,
  );

  const task = await tasksService.findById(ctx.params.id);
  ctx.assert(task, 404, errorMessages.tasks.notFound);

  const result = await validators.addParticipator.validate(ctx, task.participatorIds);
  ctx.assert(!result.errors, 400);

  const newTask = await tasksService.findOneAndUpdate(
    { _id: ctx.params.id },
    {
      $push: { participatorIds: ctx.params.staffId },
    },
    { returnOriginal: false },
  );

  ctx.body = newTask;
};

exports.removeParticipator = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin() ||
    ctx.state.user._id === ctx.params.staffId,
    403, errorMessages.authorization.permission,
  );

  const task = await tasksService.findById(ctx.params.id);
  ctx.assert(task, 404, errorMessages.tasks.notFound);

  const result = await validators.removeParticipator.validate(ctx, task.participatorIds);
  ctx.assert(!result.errors, 400);

  const newTask = await tasksService.findOneAndUpdate(
    { _id: ctx.params.id },
    {
      $pull: { participatorIds: ctx.params.staffId },
    },
    { returnOriginal: false },
  );

  ctx.body = newTask;
};
