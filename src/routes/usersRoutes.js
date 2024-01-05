const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validatorUser } = require('../middleware/validators');

router
    .get('/',userController.getAll)
    .get('/:_id',userController.getId)   
    .post('/', validatorUser ,userController.create)
    .put('/:_id', validatorUser,userController.update)
    .delete('/:_id',userController.deleteId)
    
module.exports = router;