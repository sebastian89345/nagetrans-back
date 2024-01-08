const express = require('express');
const router = express.Router();
const vehicleDocumentController = require('../controllers/vehicleDocumentController');

router
    .get('/',vehicleDocumentController.getAll)
    .get('/:_id', vehicleDocumentController.getId)   
    .post('/',vehicleDocumentController.create)
    .put('/:_id',vehicleDocumentController.update)
    .delete('/:_id',vehicleDocumentController.deleteId)
    
module.exports = router;