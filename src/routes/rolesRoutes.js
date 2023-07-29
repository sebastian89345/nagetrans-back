const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');
const { validatorCreate, validatorUpdate } = require('../middleware/validators');

router
    .get('/',rolesController.getAll)
    .get('/:_id',rolesController.getId)
    .post('/', validatorCreate ,rolesController.create)
    .put('/:_id', validatorUpdate ,rolesController.update)
    .delete('/:_id',rolesController.deleteId)
    
module.exports = router;