var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// app.set('views', __dirname);
// app.engine('html', require('ejs'));
// app.set('view engine', 'html');
app.use(express.static(__dirname));
// app.use(bodyParser.json())

// app.get('/', function(req,res){
//   res.render('signin');
// });





app.listen(port, function(){
  console.log('the remembrane is watching');
})