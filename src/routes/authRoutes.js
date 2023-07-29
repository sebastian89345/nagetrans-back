const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { login } = require('../middleware/validators')

router
    .post('/login', login ,authController.login) 
    
module.exports = router;