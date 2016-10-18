var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var membranes = require('./Server/mebraneDB')

app.set('views', __dirname + '/Client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/Client/views'));
app.use(bodyParser.json())

app.get('/', function(req,res){
  res.render('add.html');
});

app.get('/membranes', function(req, res) {
  membranes.find().exec(function(err,results){
    if(err){
      console.log('the get errored')
    }
    if(results){
      res.send(results);
    }
  }).then(function(){
    console.log('you have successfully obtained a membrane from the data')
  })
});

app.get('/add',function(req,res){
  res.render('add.html')
})

app.get('/search',function(req,res){
  res.render('search.html')
})

app.post('/membranes',function(req,res) {
  console.log('the get request is: ',req)
  var name = req.body.name;
  var polymer = req.body.polymer;
  var humidity = req.body.humidity;
  var MW = req.body.MW;
  var rejRate = req.body.rejRate;
  var flowThru = req.body.flowThru;
  console.log('the membranes database is: ',membranes)
  membranes.findOne({name:name}).exec(function(err,results){
    if(err){
      console.log('the post got errored')
    }
    if(results){
      console.log('there was an error, you cannot have 2 membranes with the same name')
    } else {
      console.log('a new membrane is being created')
      new membranes({
        name:name,
        polymer:polymer,
        humidity:humidity,
        MW:MW,
        rejRate:rejRate,
        flowThru:flowThru
      }).save(function(err,data){
        if(err){
          console.log(err)
        } else {
          res.send(data);
        }
      })
    }
  })
})





app.listen(port, function(){
  console.log('the remembrane is watching on port: ', port);
})