const url = require('../config/config.json');
const mongoose = require('mongoose');

mongoose.connect(url.urlDatabaseQA,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log('Error connecting database ' + err))