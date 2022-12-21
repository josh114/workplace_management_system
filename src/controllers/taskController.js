const Task = require('../models/taskModel');

exports.getAllTasks = async (req, res) => {
  try {
    //   let query = req.query;
    const allTask = await Task.find();
    res.status(200).json({
      status: 'Success',
      data: {
        allTask,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createTask = async (req, res) => {
  try {
    let query = await Task.create(req.body);
    res.status(201).json({
      status: 'Success',
      data: {
        query,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};
