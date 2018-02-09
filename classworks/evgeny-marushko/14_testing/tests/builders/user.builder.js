class UserBuilder {
  constructor ()  {
    this.data = {}
  }

  email (email) {
    this.data.email = email;
    return this;
  }

  password (password) {
    this.data.password = password;
    return this;
  }

  firstName (firstName) {
    this.data.firstName = firstName;
    return this;
  }

  lastName (lastName) {
    this.data.lastName = lastName;
    return this;
  }

  build () {
    return this.data
  }
}

module.exports = UserBuilder;
