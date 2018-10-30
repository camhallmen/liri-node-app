require("dotenv").config();

// Global variables
var input = process.argv[3]
var action = process.argv[2]

// Spotify request
var request = require("request")
var keys = require("./keys")
var SPOTIFY = require("node-spotify-api")
var spotify = new SPOTIFY(keys.spotify);

function spotifyThis(spotifyInput) {
    // Default to The Sign
    if (spotifyInput === " ") {
        spotifyInput = "The Sign"
    }
    // Otherwise, perform the search
    spotify.search({ type: 'track', query: spotifyInput, limit: 3 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("\n-----------------------------------------------")
        console.log("Artist/Band: " + data.tracks.items[0].album.artists[0].name)
        console.log("Track Name: " + data.tracks.items[0].name)
        console.log("Album Name: " + data.tracks.items[0].album.name)
        console.log("Album Link: " + data.tracks.items[0].album.external_urls.spotify)
        console.log("-----------------------------------------------\n")
    });
}

// Switches to call different LIRI functions
switch (action) {
    case "movie-this":
        movieThis(input)
        break;

    case "spotify-this-song":
        spotifyThis(input)
        break;

    case "concert-this":
        concertThis(input)
        break;

    case "do-what-it-says":
        doThis()
        break;
}

// OMDB request 
function movieThis(movieInput) {
    // Default to Mr. Nobody if no input
    if (movieInput === " ") {
        movieInput = "Mr. Nobody"
    }
    request("http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if (!error && response.statusCode === 200) {

            // Say hello to my little friend(s)
            console.log("\n-----------------------------------------------")
            console.log("Title: " + JSON.parse(body).Title)
            console.log("Year released: " + JSON.parse(body).Year)
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating)
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
            console.log("Country(s): " + JSON.parse(body).Country)
            console.log("Language(s): " + JSON.parse(body).Language)
            console.log("Plot: " + JSON.parse(body).Plot)
            console.log("Actors: " + JSON.parse(body).Actors)
            console.log("-----------------------------------------------\n")
        }
    })
}

// Bands In Town request
function concertThis(concertInput) {
    var moment = require("moment")

    request("https://rest.bandsintown.com/artists/" + concertInput + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // Saved concert date as a variable to clean up final line
            var concertDate = JSON.parse(body)[0].datetime

            // Show me the money
            console.log("\n-----------------------------------------------")
            console.log("Band: " + concertInput)
            console.log("Venue: " + JSON.parse(body)[0].venue.name)
            console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region)
            console.log("Date: " + moment(concertDate).format("DD/MM/YYYY"))
            console.log("-----------------------------------------------\n")
        }
    })
}



