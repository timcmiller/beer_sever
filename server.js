var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Beer = require(__dirname + '/models/beer.js');
var beerRouter = require(__dirname + '/routes/beer_routes.js');
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beer_dev');

Beer.find({}, function(err, data) {
  if(data.length === 0) {require(__dirname + '/lib/population.js');}
});

app.use('/api', beerRouter);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

app.listen(port, function() {
  console.log('Server up on port number ' + port + '.');
});
