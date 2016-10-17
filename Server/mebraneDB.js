var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/membranesdb');

var MembraneSchema = new mongoose.Schema({
  name:String,
  polymer:String,
  humidity:String,
  flowThru:Number
})

module.exports = mongoose.model('membranes', MembraneSchema);