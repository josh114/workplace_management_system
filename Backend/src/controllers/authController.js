const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');
const AppError = require('../utils/appError');

const signedToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      address: req.body.address,
      state: req.body.state,
      country: req.body.country,
      phone: req.body.phone
    });
    const token = signedToken(newUser._id);
    res.status(201).json({
      status: 'Success',
      token,
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'create user fail',
      message: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    //implement chech for valid user and password
    if (!email || !password) {
      return next(
        new AppError('Please provide a valid email and password', 400)
      );
    }
    //get email and password from  database
    const user = await User.findOne({ email }).select('+password');
    console.log(user);
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Invalid email or password', 401));
    }
    //respond with the correct token for user acces
    const token = signedToken(user._id);
    const roles = user.role;
    res.status(200).json({
      status: 'Success',
      data: {
        roles,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    console.log(token);
  }
  if (!token) {
    return next(
      new AppError('You are not logged in! Pleae log in to gain access', 401)
    );
  }
  //verify token using jwt.verify
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //check if user still exist
  const currentUser = await User.findById(decode.id);
  if (!currentUser) {
    return next(
      new AppError('The user belonging to this token no longer exist', 401)
    );
  }
  //check if user changed password after token was issued
  if (currentUser.changedPasswordAfter(decode.iat)) {
    return next(new AppError('user changed password, please login again', 401));
  }
  req.user = currentUser;
  next();
};
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          'This user does not have the permission to perform this operation',
          403
        )
      );
    }
    next();
  };
};
