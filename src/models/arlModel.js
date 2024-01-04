var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const arlSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('arl', arlSchema);