var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/membranesdb');

var UserSchema = new mongoose.Schema({
  username:String,
  password:String
})

module.exports = mongoose.model('users', UserSchema);