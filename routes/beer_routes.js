var express = require('express');
var bodyParser = require('body-parser');
var Beer = require(__dirname + '/../models/beer.js');

var beerRouter = module.exports = exports = express.Router();

beerRouter.use(bodyParser.json());
beerRouter.use(bodyParser.urlencoded({extended: true}));

beerRouter.get('/beers', function(req, res) {
  Beer.find({}, function(err, data) {
    if (err) throw err;
    var beerList = {
      total: data.length,
      beers: data
    };
    res.send(beerList);
  });
});

beerRouter.post('/beers', function(req, res) {
  var newBeer = new Beer(req.body);
  newBeer.save(function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

beerRouter.put('/beers/:id', function(req, res) {
  var beerData = req.body;
  delete beerData._id;
  Beer.update({_id: req.paramas.id}, beerData, function(err) {
    if (err) throw err;

    res.send('updated!');
  });
});

beerRouter.delete('beers/:id', function(req, res) {

  Beer.remove({_id: req.params.id}, function(err) {
    if (err) throw err;

    res.send('deleted!');
  });
});
