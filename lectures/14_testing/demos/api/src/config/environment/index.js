const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';

let base = {
  env,
  mongo: {
    connection: 'connenction string',
  },
  apiUrl: 'http://localhost:5001',
  apiPrefix: '/api/v1',
  jwt: {
    secret: 'secret',
    audience: 'test.api',
    issuer: 'test.api',
  },
  logType: 'dev',
  port: process.env.PORT || 5001,
  amazonS3: {
    secretAccessKey: 'secret access key',
    accessKeyId: 'access key id',
    bucket: 'TEST_API',
    maxFileSizeInBytes: 10485760,
    region: 'us-east-1',
  },
};

base = _.merge(base, require(`./${env}.js`) || {}); // eslint-disable-line

const loadLocalConfig = (name) => {
  const localConfigPath = path.join(__dirname, name);
  if (fs.existsSync(localConfigPath)) {
    base = _.merge(base, require(localConfigPath)); // eslint-disable-line
    console.log(`loaded ${localConfigPath} config`); // eslint-disable-line
  }
};

// local file can be used to customize any config values during development
if (base.env === 'test') {
  loadLocalConfig('test-local.js');
} else {
  loadLocalConfig('local.js');
}

module.exports = base;
