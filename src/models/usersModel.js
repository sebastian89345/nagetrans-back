var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    user:String,
    placa: String,
    dni: String,
    password: String,
    names: String,
    surnames: String,
    phoneNumber: String,
    email: String,
    internalNumber:Number,
    show:String,
    brand: [{
        ref:"brand",
        type:Schema.Types.ObjectId
    }],
    types: [{
        ref:"types",
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

module.exports = mongoose.model('users', userSchema);