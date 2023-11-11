const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/api/user-profile', userController.createUserProfile);

module.exports = router;
