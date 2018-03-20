const faker = require('faker');
const BaseBuilder = require('tests/base.builder');
const service = require('./staff.service');

// {
//     _id: '1',
//     email: 'e.zhivitsa@paralect.com',
//     passwordHash: 'kdfmbkskkjnklnl',
//     passwordSalt: '123123',
//     firstName: 'Evgeny',
//     lastName: 'Zhivitsa',
//     isAdmin: true
// }

const salt = 'salt';
const qwertyHash = '$2a$10$8Z0s/vCE09wIN.piv7qCEuBmV8oIfafV.j7IOCXUTPZOUOpaLPa9K';

class StaffBuilder extends BaseBuilder {
  constructor() {
    super(service);
    this.data = {};

    this.data.email = faker.internet.email().toLowerCase();
    this.data.passwordHash = qwertyHash;
    this.data.passwordSalt = 'salt';
    this.data.firstName = faker.name.firstName();
    this.data.lastName = faker.name.lastName();
  }

  admin() {
    this.data.isAdmin = true;
    return this;
  }

  client() {
    this.data.isAdmin = false;
    return this;
  }
}

module.exports = StaffBuilder;
