const Staff = require('../models/staffmodel');

exports.createStaff = async (req, res) => {
  try {
    const response = await Staff.create({
      creator: req.user._id,
      name: req.body.name,
      email: req.body.email,
    });
    console.log(response);
    res.status(201).json({
      status: 'Success',
      response: 'staff created',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.getAllStaff = async (req, res) => {
  try {
    const id = req.user._id.toString();
    const response = await Staff.find({ creator: id });
    console.log(response);
    res.status(200).json({
      status: 'Success',
      response,
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error,
    });
  }
};
