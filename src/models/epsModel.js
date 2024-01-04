var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const epsSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('eps', epsSchema);