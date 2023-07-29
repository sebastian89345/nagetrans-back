const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');


router
    .get('/',modelController.getAll)
    .get('/:_id',modelController.getId)
    .post('/', validatorCreate ,modelController.create)
    .put('/:_id', validatorUpdate ,modelController.update)
    .delete('/:_id',modelController.deleteId)
    
module.exports = router;