var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  origin: String,
  abv: Number,
  summary: String,
  picutre: String
});

module.exports = exports = mongoose.model('Beer', beerSchema);
