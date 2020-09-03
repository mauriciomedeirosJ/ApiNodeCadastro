const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);
module.exports = mongoose