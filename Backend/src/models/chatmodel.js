const mongoose = require('mongoose');
const ChatSchema = mongoose.Schema({
  chat: {
    type: String,
    required: [true, 'A chat should not be empty'],
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: [true, 'A chat must have a task id'],
  },
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});
const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;
