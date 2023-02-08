const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  person: [String],
  status: {
    type: String,
    default: 'unassigned',
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  dueDate: {
    type: Date,
  },
  attachedFiles: [String],
  description: {
    type: String,
  },
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
