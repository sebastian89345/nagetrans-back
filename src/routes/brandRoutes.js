const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',brandController.getAll)
    .get('/:_id',brandController.getId)
    .post('/', validatorCreate, brandController.create)
    .put('/:_id', validatorUpdate ,brandController.update)
    .delete('/:_id',brandController.deleteId)
     
module.exports = router;