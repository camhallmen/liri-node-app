console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.movies = {
  apikey: process.env.apikey
} 

exports.concertID = {
  app_id: process.env.codingbootcamp
}