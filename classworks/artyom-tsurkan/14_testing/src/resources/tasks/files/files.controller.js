const asyncBusboy = require('async-busboy');
const isImage = require('is-image');
const { idGenerator } = require('@paralect/node-mongo');

const errorMessages = require('app.errorMessages');

const filesConstants = require('./files.constants');

const helpers = require('infrastructure/helpers');

const tasksService = require('../tasks.service');

const extensionRegExp = /(\.[^.]+)$/;

exports.getFile = async (ctx, next) => {
  const task = await tasksService.findById(ctx.params.id);
  ctx.assert(task, 404, errorMessages.tasks.notFound);
  ctx.assert(task.fileFileName, 404, errorMessages.tasks.fileNotFound);

  const result = await helpers.amazonS3.downloadFile(
    task.fileFileName,
    filesConstants.S3_FILES_FOLDER,
  );
  ctx.assert(!result.error, 400, result.error);

  const data = result.value;

  ctx.set('Content-disposition', 'inline');
  ctx.set('Content-type', data.ContentType);
  ctx.body = data.Body;
};

exports.updateFile = async (ctx, next) => {
  ctx.assert(
    ctx.state.authorization.isAdmin(),
    403, errorMessages.authorization.permission,
  );

  const task = await tasksService.findById(ctx.params.id);
  ctx.assert(task, 404, errorMessages.tasks.notFound);

  if (task.fileFileName) {
    // delete avatar from the amazon s3
    await helpers.amazonS3.deleteFile(task.fileFileName);
  }

  const data = await asyncBusboy(ctx.req);
  const [stream] = data.files;
  ctx.assert(stream, 400);

  const fileId = idGenerator.generate();
  const originalFileName = stream.filename.replace(/"/g, '');
  const match = originalFileName.match(extensionRegExp);
  const extension = match ? match[0] : '';
  ctx.assert(isImage(originalFileName), 400);

  const generatedFileName = `${fileId}${extension}`;
  const result = await helpers.amazonS3.uploadFile(
    generatedFileName,
    stream,
    filesConstants.S3_FILES_FOLDER,
  );
  ctx.assert(!result.error, 400, result.error);

  const newTask = await tasksService.findOneAndUpdate(
    { _id: ctx.params.id },
    {
      $set: { fileFileName: generatedFileName },
    },
    { returnOriginal: false },
  );

  ctx.body = newTask;
};

exports.deleteFile = async (ctx, next) => {
  const task = await tasksService.findById(ctx.params.id);
  ctx.assert(task, 404, errorMessages.tasks.notFound);
  ctx.assert(task.fileFileName, 404, errorMessages.tasks.fileNotFound);

  const result = await helpers.amazonS3.deleteFile(task.fileFileName);
  ctx.assert(!result.error, 400, result.error);

  const newTask = await tasksService.findOneAndUpdate(
    { _id: ctx.params.id },
    {
      $set: { fileFileName: null },
    },
    { returnOriginal: false },
  );

  ctx.body = newTask;
};
