const Workspace = require('../models/workspacemodel');

exports.getAllWorkspace = async (req, res) => {
  try {
    //   let query = req.query;
    const allWorkspaces = await Workspace.find();
    res.status(200).json({
      status: 'Success',
      data: {
        allWorkspaces,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getWorkspace = async (req, res) => {
  try {
    let query = req.query;
    console.log(query);
    const workSpace = await Workspace.findById(query);
    res.status(200).json({
      status: 'Success',
      data: {
        workSpace,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createWorkspace = async (req, res) => {
  try {
    let newWorkSpace = await Workspace.create({
      id: req.body.id,
      name: req.body.name,
      board: req.body.board,
    });
    res.status(200).json({
      status: 'Success',
      data: {
        newWorkSpace,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
