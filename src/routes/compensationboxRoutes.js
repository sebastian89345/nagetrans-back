const express = require('express');
const router = express.Router();
const compensationboxController = require('../controllers/compensationboxController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',compensationboxController.getAll)
    .get('/:_id', compensationboxController.getId)   
    .post('/', validatorCreate ,compensationboxController.create)
    .put('/:_id', validatorUpdate ,compensationboxController.update)
    .delete('/:_id',compensationboxController.deleteId)
    
module.exports = router;