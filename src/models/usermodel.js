const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please proide a correct email'],
  },
  password: {
    type: String,
    required: [true, 'A user  must set password'],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'passwords must match'],
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
