const Task = require('../models/taskModel');

exports.getAllTasks = async (req, res) => {
  try {
    let query = req.user._id;
    console.log(query);
    const allTask = await Task.find({ creator: query });
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
    console.log('create task request');
    const query = await Task.create({
      name: req.body.name,
      description: req.body.description,
      dueDate: req.body.date,
      creator: req.user._id,
      status: req.body.status,
    });
    res.status(201).json({
      status: 'Success',
      data: {
        query,
      },
    });
  } catch (err) {
    console.log(err?.message);
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getTask = async (req, res) => {
  try {
    let id = req.params.id;
    const task = await Task.findById(id);
    res.status(201).json({
      status: 'Success',
      task,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error?.message,
    });
  }
};
exports.updateTask = async (req, res) => {
  try {
    console.log('new task update request');
    console.log(req.params, req.body);
    const id = req.params.id;
    const response = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(response);
    res.status(201).json({
      status: 'Success',
      response,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
