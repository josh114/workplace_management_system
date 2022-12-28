const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authController = require('../controllers/authController');
router
  .route('/')
  .get(authController.protect, taskController.getAllTasks)
  .post(taskController.createTask);

module.exports = router;
