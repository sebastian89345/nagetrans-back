const express = require('express');
const router = express.Router();
const driverDocumentController = require('../controllers/driverDocumentController');

router
    .get('/',driverDocumentController.getAll)
    .get('/:_id', driverDocumentController.getId)   
    .post('/',driverDocumentController.create)
    .put('/:_id',driverDocumentController.update)
    .delete('/:_id',driverDocumentController.deleteId)
    
module.exports = router;