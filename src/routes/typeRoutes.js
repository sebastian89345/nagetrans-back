const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',typeController.getAll)
    .get('/:_id',typeController.getId)   
    .post('/', validatorCreate ,typeController.create)
    .put('/:_id', validatorUpdate ,typeController.update)
    .delete('/:_id',typeController.deleteId)
    
module.exports = router;