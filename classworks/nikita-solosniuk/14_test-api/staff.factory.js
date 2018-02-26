const Builder = require('./staff.builder');

const admin = async () => {
  const builder = new Builder();
  const staff = builder.admin().build();
  staff.password = 'qwerty';
  return staff;
};

const client = async () => {
  const builder = new Builder();
  const staff = builder.client().build();
  staff.password = 'qwerty';
  return staff;
};

module.export = {
  client,
  admin,
};
