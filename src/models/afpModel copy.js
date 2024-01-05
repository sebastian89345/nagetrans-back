var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const afpSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('afp', afpSchema);