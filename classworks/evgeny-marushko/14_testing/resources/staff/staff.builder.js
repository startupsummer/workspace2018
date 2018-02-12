const BaseBuilder = require('tests/base.builder');
const staffService = require('./staff.service');

const salt = 'salt';
const qwertyHash = '$2a$10$8Z0s/vCE09wIN.piv7qCEuBmV8oIfafV.j7IOCXUTPZOUOpaLPa9K';

class StaffBuilder extends BaseBuilder {
  constructor() {
    super(staffService);
    this.data.createdOn = Date.now();
    this.data.signupToken = null;

    this.firstName('firstName');
    this.lastName('lastName');
    this.email('mail@mail.ru');
    this.password();
  }
  firstName(firstName) {
    this.data.firstName = firstName;
    return this;
  }
  lastName(lastName) {
    this.data.lastName = lastName;
    return this;
  }
  email(email) {
    this.data.email = email;
    return this;
  }
  password(passwordHash = qwertyHash, passwordSalt = salt) {
    this.data.passwordHash = passwordHash;
    this.data.passwordSalt = passwordSalt;
    return this;
  }
  admin() {
    this.data.isAdmin = true;
    this.data.email = 'admin@mail.com';
    return this;
  }
  simple() {
    this.data.isAdmin = false;
    this.data.email = 'simple@mail.com';
    return this;
  }
}

module.exports = StaffBuilder;
