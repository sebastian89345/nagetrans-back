var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const driverDocumentSchema = new Schema({
    numberLicense: String,
    expirationLicense: String,
    startLicense:String,
    expirationTimeLicense:String,
    users: [{
        ref:"users",
        type:Schema.Types.ObjectId
    }],
    arl: [{
        ref:"arl",
        type:Schema.Types.ObjectId
    }],
    afp: [{
        ref:"afp",
        type:Schema.Types.ObjectId
    }],
    eps: [{
        ref:"eps",
        type:Schema.Types.ObjectId
    }],
    compesationBox: [{
        ref:"compesationBox",
        type:Schema.Types.ObjectId
    }],
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('driverDocument', driverDocumentSchema);