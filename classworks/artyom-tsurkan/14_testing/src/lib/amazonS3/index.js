const AWS = require('aws-sdk');

class AmazonS3 {
  constructor(config = {}) {
    this.config = config;
    this.bucket = config.bucket;
    this.maxFileSizeInBytes = config.maxFileSizeInBytes;

    this.s3 = new AWS.S3(config);
  }

  upload(key, body) {
    const params = {
      Bucket: this.bucket,
      Key: key,
      Body: body,
    };
    return this.s3.upload(params).promise();
  }

  delete(key) {
    if (key instanceof Array) {
      const params = {
        Bucket: this.bucket,
        Delete: {
          Objects: key.map(deleteKey => ({
            Key: deleteKey,
          })),
        },
      };
      return this.s3.deleteObjects(params).promise();
    }

    const params = {
      Bucket: this.bucket,
      Key: key,
    };
    return this.s3.deleteObject(params).promise();
  }

  download(key) {
    const params = {
      Bucket: this.bucket,
      Key: key,
    };
    return this.s3.getObject(params).promise();
  }

  getUrl(key, expiresSeconds) {
    const params = {
      Bucket: this.bucket,
      Key: key,
      Expires: expiresSeconds,
    };
    return this.s3.getSignedUrl('getObject', params);
  }

  copy(key, copyKey) {
    const params = {
      Bucket: this.bucket,
      CopySource: `${this.bucket}/${copyKey}`,
      Key: key,
    };
    return this.s3.copyObject(params).promise();
  }
}

module.exports = AmazonS3;
