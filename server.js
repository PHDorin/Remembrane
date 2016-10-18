var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var membranes = require('./Server/mebraneDB.js')

app.set('views', __dirname + '/Client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/Client/views'));
app.use(bodyParser.json())

app.get('/', function(req,res){
  res.render('add.html');
var membranes = require('./Server/mebraneDB.js')
});

app.get('/membranes', function(req, res) {
    users.find().exec(function(err, results) {
      res.status(200).send(results);
    });
});

app.get('/add',function(req,res){
  res.render('add.html')
})

app.get('/search',function(req,res){
  res.render('search.html')
})

app.post('/membranes',function(req,res) {
  console.log('this is the top of the server post')
  console.log('****** the request is: ',req.body)
  var name = req.body.name;
  var polymer = req.body.polymer;
  var humidity = req.body.humidity;
  var flowThru = req.body.flowThru;
  membranes.findOne({name:name}).exec(function(err,results){
    if(results){
      console.log('there was an error, you cannot have 2 membranes with the same name')
    } else {
      new membranes({
        name:name,
        polymer:polymer,
        humidity:humidity,
        flowThru:flowThru
      })
    }
  })
})





app.listen(port, function(){
  console.log('the remembrane is watching on port: ', port);
})