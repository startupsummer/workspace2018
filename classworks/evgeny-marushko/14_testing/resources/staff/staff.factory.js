const Builder = require('./staff.builder');

exports.admin = async () => {
  const builder = new Builder();
  const staff = await builder.admin().build();
  staff.password = 'qwerty';
  return staff;
};

exports.simple = async () => {
  const builder = new Builder();
  const staff = await builder.simple().build();
  staff.password = 'qwerty';
  return staff;
};
