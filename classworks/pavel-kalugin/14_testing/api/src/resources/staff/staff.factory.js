const StaffBuilder = require('./staff.builder');

exports.admin = async () => {
  const builder = new StaffBuilder();
  const user = await builder.admin().build();

  return user;
};

exports.client = async () => {
  const builder = new StaffBuilder();
  const user = await builder.client().build();

  return user;
};
