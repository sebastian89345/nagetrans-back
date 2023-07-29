var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const statusUserSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('status', statusUserSchema);