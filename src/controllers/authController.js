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
      password: req.body.password,
      passwordConfirm: req.body.passwodConfirm,
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
    const { email, password } = req.body;
    //implement chech for valid user and password
    if (!email || !password) {
      return next(
        new AppError('Please provide a valid email and password', 400)
      );
    }
    //get email and password from  database
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Invalid email or password', 401));
    }
    //respond with the correct token for user acces
    const token = signedToken(user._id);
    res.status(200).json({
      status: 'Success',
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};
exports.protected = async (req, res, next) => {
  next();
};
