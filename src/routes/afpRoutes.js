const express = require('express');
const router = express.Router();
const afpController = require('../controllers/afpController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',afpController.getAll)
    .get('/:_id', afpController.getId)   
    .post('/', validatorCreate ,afpController.create)
    .put('/:_id', validatorUpdate ,afpController.update)
    .delete('/:_id',afpController.deleteId)
    
module.exports = router;