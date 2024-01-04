var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const compesationBoxSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('compesationBox', compesationBoxSchema);