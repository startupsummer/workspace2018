const StaffBuilder = require('./staff.builder');

exports.create = (firstName, lastName, email, password) => {
  const userBuilder = new StaffBuilder();
  const user = userBuilder
    .firstName(firstName)
    .lastName(lastName)
    .email(email)
    .password(password)
    .build();
  return user;
};
