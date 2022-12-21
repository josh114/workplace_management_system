import User from '../models/usermodel';
exports.signup = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    res.status(201).json({
      status: 'Success',
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'create user fail',
      message: err,
    });
  }
};
