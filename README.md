# liri-node-app

### Your very own virtual assistant

The goal of this application is to create a Language Interpretation and Recognition Interface or *LIRI*.
With it, the user will be able to query for:

* Movie information according to OMDB
* Concert information from Bands In Town
* Song/Artist information from Spotify
* A fun bonus!

**This is how it works**

There are four commands you can issue to LIRI. "movie-this", "concert-this", "spotify-this-song" and "do-what-it-says".
Each command can then take an additional value to specify what it is you're searching for. For example, you could say "movie-this" followed by "Inception" to get the OMDB results back for that particular movie.

LIRI Command | Command Value
-------------|--------------
"movie-this" | "The Lion King", "Inception", "Hot Fuzz"
"concert-this" | "Radiohead", "Kings of Leon", "Metallica"
"spotify-this-song" | "Don't stop believing", "American Idiot", "All The Small Things"
"do-what-it-says" | Query Spotify for "I Want It That Way"

**LIRI Commands can be issued through the terminal after downloading the proper node packages**

Simply type "node liri.js" (without the quotes) follwed by a command such as "movie-this" (again, no quotes) and lastly, whatever it is you're searching for such as "Inception" this time keeping the quotes.

**node liri.js movie-this "Inception"**
