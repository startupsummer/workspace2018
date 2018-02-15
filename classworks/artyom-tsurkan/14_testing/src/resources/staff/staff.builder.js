const faker = require('faker');

const BaseBuilder = require('tests/base.builder');
const staffService = require('./staff.service');

const salt = 'salt';
const qwertyHash = '$2a$10$8Z0s/vCE09wIN.piv7qCEuBmV8oIfafV.j7IOCXUTPZOUOpaLPa9K';

class StaffBuilder extends BaseBuilder {
    constructor() {
        super(staffService);
        this.data.createdOn = Date.now();
        this.data.signupToken = null;
        this.email();
        this.firstName();
        this.lastName();
        this.password();
    }

    email(emailAddress) {
        this.data.email = emailAddress || faker.internet.email().toLowerCase();
        return this;
    }

    firstName(firstName) {
        this.data.firstName = firstName || faker.name.firstName();
        return this;
    }

    lastName(lastName) {
        this.data.lastName = lastName || faker.name.lastName();
        return this;
    }

    password(passwordHash = qwertyHash, passwordSalt = salt) {
        this.data.passwordHash = passwordHash;
        this.data.passwordSalt = passwordSalt;
        return this;
    }

    admin(emailAddress) {
        this.data.isAdmin = true;
        this.data.email = emailAddress || faker.internet.email().toLowerCase();
        return this;
    }

    client(emailAddress) {
        this.data.isAdmin = false;
        this.data.email = emailAddress || faker.internet.email().toLowerCase();
        return this;
    }
}

module.exports = StaffBuilder;