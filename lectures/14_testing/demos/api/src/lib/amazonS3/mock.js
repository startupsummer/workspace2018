const { promisify } = require('util');
const MockAWS = require('mock-aws-s3');

class MockS3 {
  constructor(options) {
    this.mock = new MockAWS.S3(options);

    this.mock.uploadAsync = promisify(this.mock.upload);
    this.mock.getObjectAsync = promisify(this.mock.getObject);
  }

  upload(search, options, callback) {
    if (callback) {
      this.mock.upload(search, options, callback);
      return null;
    }

    return {
      promise: () => this.mock.uploadAsync(search, options),
    };
  }

  getObject(search, callback) {
    if (callback) {
      this.mock.getObject(search, callback);
      return null;
    }

    return {
      promise: () => this.mock.getObjectAsync(search),
    };
  }
}

exports.S3 = MockS3;
