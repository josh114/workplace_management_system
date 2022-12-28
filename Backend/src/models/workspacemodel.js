const mongoose = require('mongoose');
const WorkspaceSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, 'A workspace must have a user Id'],
  },
  name: {
    type: String,
    default: String,
  },
  boards: [String],
  CreatedAt: {
    Date,
    default: new Date().getTime(),
  },
});

const Workspace = mongoose.model('Workspace', WorkspaceSchema);
module.exports = Workspace;
