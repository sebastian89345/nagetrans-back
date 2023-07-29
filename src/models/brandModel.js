var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('brand', brandSchema);