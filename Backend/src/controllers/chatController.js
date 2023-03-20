const Chat = require('../models/chatmodel');

exports.createChat = async (req, res) => {
  try {
    const response = await Chat.create({
      chat: req.body.chat,
      task: req.body.taskId,
      staff: req.body.staffId,
      user: req.body.userId,
    });
    res.status(201).json({
      status: 'Success',
      response,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error?.message,
    });
  }
};

exports.getChat = async (req, res) => {
  try {
    const response = await Chat.find({ task: req.body.taskId });
    res.status(201).json({
      status: 'Success',
      response,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error?.message,
    });
  }
};
