const faker = require('faker');

const staffService = require('./staff.service');
const BaseBuilder = require('tests/base.builder');

const hash = '$2a$10$8Z0s/vCE09wIN.piv7qCEuBmV8oIfafV.j7IOCXUTPZOUOpaLPa9K';
const salt = 'salt';

class StaffBuilder extends BaseBuilder {
  constructor() {
    super(staffService);
    this.firstName();
    this.lastName();
    this.email();
    this.password();
    this.data.createdOn = Date.now();
    this.data.signupToken = null;
  }

  firstName() {
    this.data.firstName = faker.name.firstName();
    return this;
  }

  lastName() {
    this.data.lastName = faker.name.lastName();
    return this;
  }

  email() {
    this.data.email = faker.internet.email().toLowerCase();
    return this;
  }

  password(passwordHash = hash, passwordSalt = salt) {
    this.data.passwordHash = passwordHash;
    this.data.passwordSalt = passwordSalt;
    return this;
  }

  admin() {
    this.data.isAdmin = true;
    this.data.email = faker.internet.email().toLowerCase();
    return this;
  }

  client() {
    this.data.isAdmin = false;
    this.data.email = faker.internet.email().toLowerCase();
    return this;
  }
}

module.exports = StaffBuilder;
