const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const staffSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A staff must have a name'],
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  password: {
    type: String,
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
staffSchema.pre('save', async function (next) {
  //only run if password is created or updated
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});
staffSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};
staffSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimeStamp < changedTimeStamp;
  }
  return false;
};
const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
