const express = require('express');
const router = express.Router();

const { userController } = require('../controller');

// POST /login
router.post('/', userController.login.post);

module.exports = router;