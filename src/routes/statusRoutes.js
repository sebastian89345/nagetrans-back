const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',statusController.getAll)
    .get('/:_id', statusController.getId)   
    .post('/', validatorCreate ,statusController.create)
    .put('/:_id', validatorUpdate ,statusController.update)
    .delete('/:_id',statusController.deleteId)
    
module.exports = router;