var express = require('express');
var bodyParser = require('body-parser');
var Movie = require(__dirname + '/../models/movie.js');

var movieRouter = module.exports = exports = express.Router();

movieRouter.use(bodyParser.json());
movieRouter.use(bodyParser.urlencoded({extended: true}));

movieRouter.get('/movies', function(req, res) {
  Movie.find({}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

movieRouter.post('/movies', function(req, res) {
  var newMovie = new Movie(req.body);
  newMovie.save(function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

movieRouter.put('/movies/:id', function(req, res) {
  var movieData = req.body;
  delete movieData._id;
  Movie.update({_id: req.paramas.id}, movieData, function(err) {
    if (err) throw err;

    res.send('updated!');
  });
});

movieRouter.delete('movies/:id', function(req, res) {

  Movie.remove({_id: req.params.id}, function(err) {
    if (err) throw err;

    res.send('deleted!');
  });
});
