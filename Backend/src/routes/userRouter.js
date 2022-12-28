const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
router.route('/').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/').get(userController.getAllUsers);
module.exports = router;
