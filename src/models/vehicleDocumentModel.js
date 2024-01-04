var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const driverDocumentSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('driverDocument', driverDocumentSchema);