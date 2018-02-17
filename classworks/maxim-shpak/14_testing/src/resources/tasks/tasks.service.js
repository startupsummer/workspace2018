const {
  DATABASE_DOCUMENTS,
  PAGINATION,
} = require('app.constants');
const db = require('db');

const service = db.createService(DATABASE_DOCUMENTS.VIEWS.TASKS);

/**
 * Return list of users with pagination
 * @param {Object} queryParams
 * @return {Promise}
 */
service.list = (queryParams) => {
  const query = {};

  const options = {
    page: queryParams.page || 1,
    limit: parseInt(queryParams.limit, 10) || PAGINATION.DEFAULT_LIMIT,
  };

  return service.find(query, options);
};

module.exports = service;
