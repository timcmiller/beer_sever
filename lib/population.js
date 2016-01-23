var Movie = require(__dirname + '/../models/movie');

newMovie = new Movie({title: 'The Revenant', year: 2015, posters: {thumbnail: 'http://resizing.flixster.com/5MtvgBlCCxGgKV6ft2w1dAm14NA=/180x267/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/35/11203523_ori.jpg'}});
newMovie.save(function(err, data) {
  if (err) throw err;
});
