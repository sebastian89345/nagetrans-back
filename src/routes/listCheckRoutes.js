const express = require('express');
const router = express.Router();
const listCheckController = require('../controllers/listCheckController');

router
    .get('/',listCheckController.getAll)
    .get('/:_id',listCheckController.getId)   
    .post('/', listCheckController.create)
    .put('/:_id', listCheckController.update)
    .delete('/:_id',listCheckController.deleteId)
    
module.exports = router;