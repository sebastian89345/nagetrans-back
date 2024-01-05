var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const vehicleDocumentSchema = new Schema({
    soat: String,
    mechanicalTechnician: String,
    operationsCard: String,
    propertyCards: String,
    sureRccece: String,
    extract: String,
    users: [{
        ref:"users",
        type:Schema.Types.ObjectId
    }],
    dateStartSoat: String,
    dateStartMechanicalTechnician: String,
    dateStartCardOperations: String,
    dateStartCardProperties: String,
    dateStartSureRccece: String,
    dateExpirationSoat: String,
    dateExpirationMechanicalTechnician: String,
    dateExpirationCardOperations: String,
    dateExpirationCardProperties: String,
    dateExpirationSureRccece: String,
    Notifications: String,
    date: String,
    dateStartExtract: String,
    dateExpirationExtract: String,
    preventiveReview: String,
    dateStartPreventiveReview: String,
    dateExpirationPreventiveReview: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('vehicleDocument', vehicleDocumentSchema);