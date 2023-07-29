var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('model', modelSchema);