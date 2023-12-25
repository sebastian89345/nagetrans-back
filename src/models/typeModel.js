var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const typeSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('types', typeSchema);