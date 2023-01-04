const mongoose = require('mongoose');
const WorkspaceSchema = mongoose.Schema({
  name: {
    type: String,
    default: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  },
  createdAt: {
    Date,
    default: new Date().getTime(),
  },
});

const Workspace = mongoose.model('Workspace', WorkspaceSchema);
module.exports = Workspace;
