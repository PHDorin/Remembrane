var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.set('views', __dirname + '../Client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json())

app.get('/', function(req,res){
  res.render('signin.html');
});

app.get('/add',function(req,res){
  res.render('add.html')
})

app.get('/search',function(req,res){
  res.render('search.html')
})





app.listen(port, function(){
  console.log('the remembrane is watching on port: ', port);
})