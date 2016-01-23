var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Movie = require(__dirname + '/models/movie.js');
var movieRouter = require(__dirname + '/routes/movie_routes.js');
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URL || 'mongodb://localhost/oscar_dev');

Movie.find({}, function(err, data) {
  if(data.length === 0) {require(__dirname + '/lib/population.js');}
});

app.use('/api', movieRouter);

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

app.listen(port, function() {
  console.log('Server up on port number ' + port + '.');
});
