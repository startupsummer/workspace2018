const userData = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@test.com',
};

exports.getUser = () => {
  return userData;
};

exports.update = (data) => {
  Object.assign(userData, data);

  return data;
};
