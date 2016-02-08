var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  title: {type: String, required: true},
  year: {type: Number, required: true},
  synopsis: String,
  nominations: Array,
  posters: {
    thumbnail: String
  }
});

module.exports = exports = mongoose.model('Movie', movieSchema);
