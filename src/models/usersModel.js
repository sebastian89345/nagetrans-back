var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const typeSchema = new Schema({
    user:String,
    vin: String,
    dni: Number,
    password: String,
    names: String,
    surnames: String,
    phoneNumber: Number,
    email: String,
    brand: [{
        ref:"brand",
        type:Schema.Types.ObjectId
    }],
    type: [{
        ref:"type",
        type:Schema.Types.ObjectId
    }],
    model: [{
        ref:"model",
        type:Schema.Types.ObjectId
    }],
    role: [{
        ref:"role",
        type:Schema.Types.ObjectId
    }],
    status: [{
        ref:"status",
        type:Schema.Types.ObjectId
    }],
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('users', typeSchema);