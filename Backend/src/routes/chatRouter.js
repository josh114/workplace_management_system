const router = require('express').Router();
const chatController = require('../controllers/chatController');
const authController = require('../controllers/authController');

router
  .route('/')
  .post(authController.protect, chatController.createChat)
  .get(authController.protect, chatController.getChat);

module.exports = router;
