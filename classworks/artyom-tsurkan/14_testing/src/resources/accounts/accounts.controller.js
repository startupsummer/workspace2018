const config = require('config');
const authService = require('auth.service');
const staffService = require('resources/staff/staff.service');

const securityUtil = require('security.util');

const validators = require('./validators');

const createUserAccount = async (userData) => {
  const salt = await securityUtil.generateSalt();

  const [hash, signupToken] = await Promise.all([
    securityUtil.getHash(userData.password, salt),
    securityUtil.generateSecureToken(),
  ]);

  const user = await staffService.create({
    firstName: userData.firstName,
    lastName: userData.lastName,
    passwordHash: hash.toString(),
    passwordSalt: salt.toString(),
    email: userData.email,
    isAdmin: true,
    signupToken,
  });

  return user;
};

exports.signup = async (ctx, next) => {
  const result = await validators.signup.validate(ctx);
  ctx.assert(!result.errors, 400);

  const { value: userData } = result;
  const user = await createUserAccount(userData);

  const response = {};
  if (config.isDev) {
    response._signupToken = user.signupToken;
  }
  ctx.body = response;
};

exports.signin = async (ctx, next) => {
  const result = await validators.signin.validate(ctx);
  ctx.assert(!result.errors, 400);

  const signinData = result.value;

  const userQuery = {
    email: signinData.email,
  };
  const staff = await staffService.findOne(userQuery);



  const token = authService.createAuthToken(staff);

  ctx.body = {
    user: staff,
    token,
    apiUrl: config.apiUrl,
  };
};
