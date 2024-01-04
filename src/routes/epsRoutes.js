const express = require('express');
const router = express.Router();
const epsController = require('../controllers/epsController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',epsController.getAll)
    .get('/:_id', epsController.getId)   
    .post('/', validatorCreate ,epsController.create)
    .put('/:_id', validatorUpdate ,epsController.update)
    .delete('/:_id',epsController.deleteId)
    
module.exports = router;