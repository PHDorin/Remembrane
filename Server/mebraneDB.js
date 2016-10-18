var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost:27017/membranesdb');

var MembraneSchema = new mongoose.Schema({
  name:String,
  polymer:String,
  humidity:String,
  flowThru:Number
})

module.exports = mongoose.model('membranes', MembraneSchema);