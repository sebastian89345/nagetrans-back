const express = require('express');
const router = express.Router();
const arlController = require('../controllers/arlController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',arlController.getAll)
    .get('/:_id', arlController.getId)   
    .post('/', validatorCreate ,arlController.create)
    .put('/:_id', validatorUpdate ,arlController.update)
    .delete('/:_id',arlController.deleteId)
    
module.exports = router;