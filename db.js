const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.gjf8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promisse = global.Promise;

module.exports = mongoose;