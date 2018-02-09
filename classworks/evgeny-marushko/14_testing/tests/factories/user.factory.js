const UserBuilder = require('../builders/user.builder');

exports.create = (firstName, lastName, email, password) => {
  const userBuilder = new UserBuilder();
  const user = userBuilder
    .firstName(firstName)
    .lastName(lastName)
    .email(email)
    .password(password)
    .build();
  return user;
}
