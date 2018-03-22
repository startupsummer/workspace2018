const user = {
  email: 'batman@gmail.com',
  password: 'gotham123',
}

module.exports = ({ email, password }) => {
  if ((email === user.email) && (password === user.password)) return true;
  return false;
}
