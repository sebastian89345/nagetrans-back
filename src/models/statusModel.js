var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const statusSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('status', statusSchema);