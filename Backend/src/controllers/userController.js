const User = require('../models/usermodel');

exports.getAllUsers = async (req, res) => {
  try {
    //   let query = req.query;
    const allUsers = await User.find();
    res.status(200).json({
      status: 'Success',
      data: {
        allUsers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
