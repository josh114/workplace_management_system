const router = require('express').Router();
const staffController = require('../controllers/staffController');
const authController = require('../controllers/authController');
router
  .route('/')
  .post(authController.protect, staffController.createStaff)
  .get(authController.protect, staffController.getAllStaff);
module.exports = router;
