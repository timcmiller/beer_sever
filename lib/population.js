var Movie = require(__dirname + '/../models/movie');

newMovies = [
  new Movie({title: 'The Revenant', year: 2015, nominations: ['Best Picture', 'Best Director: Alejandro G. Iñárritu', 'Best Actor: Leonardo Dicaprio', 'Best Supporting Actor: Tom Hardy'], posters: {thumbnail: 'http://resizing.flixster.com/5MtvgBlCCxGgKV6ft2w1dAm14NA=/180x267/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/35/11203523_ori.jpg'}}),
  new Movie({title: 'The Big Short', year: 2015, nominations: ['Best Picture', 'Best Director: Adam Mckay', 'Best Supporting Actor: Christian Bale', 'Best Adapted Screenplay'], posters: {thumbnail: 'http://cdn.traileraddict.com/content/paramount-pictures/the-big-short.jpg'}}),
  new Movie({title: 'Bridge of Spies', year: 2015, nominations: ['Best Picture', 'Best Supporting Actor: Mark Rylance', 'Best Original Screenplay'], posters: {thumbnail: 'http://static.srcdn.com/slir/w786-h1164-q90-c786:1164/wp-content/uploads/BOS-1-Sht-v13-sml.jpg'}}),
  new Movie({title: 'Brooklyn', year: 2015, nominations: ['Best Picture', 'Best Actress: Saoirse Ronan', 'Best Adapted Screenplay'], posters: {thumbnail: 'http://cdn1-www.comingsoon.net/assets/uploads/gallery/brooklyn/poster-43c98278-5831-45e4-9eb0-304617abca97.jpg'}}),
  new Movie({title: 'Mad Max: Fury Road', year: 2015, nominations: ['Best Picture', 'Best Director: George Miller'], posters: {thumbnail: 'http://cdn3-www.comingsoon.net/assets/uploads/gallery/mad-max-fury-road-1406144100/11110866_658246694280855_1682386295316885693_o.jpg'}}),
  new Movie({title: 'The Martian', year: 2015, nominations: ['Best Picture', 'Best Actor: Matt Damon', 'Best Adapted Screenplay'], posters: {thumbnail: 'http://cdn.traileraddict.com/content/20th-century-fox/martian2015.jpg'}}),
  new Movie({title: 'Room', year: 2015, nominations: ['Best Picture', 'Best Director: Lenny Abrahamson', 'Best Actress: Brie Larson', 'Best Adapted Screenplay'], posters: {thumbnail: 'http://cdn1-www.comingsoon.net/assets/uploads/gallery/room/room_poster.jpg'}}),
  new Movie({title: 'Spotlight', year: 2015, nominations: ['Best Picture', 'Best Director: Tom McCarthy', 'Best Supporting Actor: Mark Ruffalo', 'Best Supporting Actress: Rachel McAdams', 'Best Original Screenplay'], posters: {thumbnail: 'http://www.screenrelish.com/wp-content/uploads/2015/08/SPOTLIGHT-Poster.jpg'}}),
  new Movie({title: 'Trumbo', year: 2015, nominations: ['Best Actor: Bryan Cranston'], posters: {thumbnail: 'http://media.vanityfair.com/photos/55cb5ab2169027501c6f3aed/master/h_1440,c_limit/trumbo-poster-bryan-cranston-2.jpg'}}),
  new Movie({title: 'Steve Jobs', year: 2015, nominations: ['Best Actor: Michael Fassbender', 'Best Actress: Kate Winselt'], posters: {thumbnail: 'http://ia.media-imdb.com/images/M/MV5BMjE0NTA2MTEwOV5BMl5BanBnXkFtZTgwNzg4NzU2NjE@._V1_SX640_SY720_.jpg'}}),
  new Movie({title: 'The Danish Girl', year: 2015, nominations: ['Best Actor: Eddie Redmayne', 'Best Supporting Actress: Alicia Vikander'], posters: {thumbnail: 'http://www.out.com/sites/out.com/files/2015/08/27/dg_one_sheet_no_rating.jpg'}}),
  new Movie({title: 'Carol', year: 2015, nominations: ['Best Actress: Cate Blanchett', 'Best Supporting Actress: Rooney Mara', 'Best Adapted Screenplay'], posters: {thumbnail: 'http://41.media.tumblr.com/2ff7b4400a7c8ba35ead2c53c369f1c4/tumblr_nu8chyYloi1ruok98o1_1280.jpg'}}),
  new Movie({title: 'Joy', year: 2015, nominations: ['Best Actress: Jennifer Lawrence'], posters: {thumbnail: 'http://www.ew.com/sites/default/files/i/2015/08/17/joy-poster.jpg'}}),
  new Movie({title: '45 Years', year: 2015, nominations: ['Best Actress: Charlotte Rampling'], posters: {thumbnail: 'http://cdn.traileraddict.com/content/ifc-films/45-years.jpg'}}),
  new Movie({title: 'Creed', year: 2015, nominations: ['Best Supporting Actor: Sylvester Stallone'], posters: {thumbnail: 'http://cdn.traileraddict.com/content/warner-bros-pictures/creed-poster.jpg'}}),
  new Movie({title: 'The Hateful Eight', year: 2015, nominations: ['Best Supporting Actress: Jennifer Jason Leigh'], posters: {thumbnail: 'http://dl9fvu4r30qs1.cloudfront.net/05/ea/4f64ae7d4bd0b3db2891cd30c525/the-hateful-eight-poster-2.jpg'}}),
  new Movie({title: 'Ex Machina', year: 2015, nominations: ['Best Original Screenplay'], posters: {thumbnail: 'http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX640_SY720_.jpg'}}),
  new Movie({title: 'Inside Out', year: 2015, nominations: ['Best Original Screenplay'], posters: {thumbnail: 'http://screenrant.com/wp-content/uploads/inside-out-poster.jpg'}}),
  new Movie({title: 'Straight Outta Compton', year: 2015, nominations: ['Best Original Screenplay'], posters: {thumbnail: 'http://www.blackfilm.com/read/wp-content/uploads/2015/06/Straight-Outta-Compton-final-poster.jpg'}})
];

newMovies.map(function(movie) {
  movie.save(function(err, data) {
    if(err) throw err;
  });
});
