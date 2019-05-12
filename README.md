# Liri

### About

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Motivation

This is a project for my Tecnologico de Monterrey's Bootcamp, we are currently learning how to use Node.js.

### What it does

#### Bands in Town
`node liri.js concert-this <insert Artist handle>`

This will show all the upcoming concerts for the mentioned artist, includes location, name of venue and date of event.

#### Spotify
`node liri.js spotify-this-song <insert song title>`

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

__*If no parameter is provided, app is designed to output concert-this handle for Imagine Dragons*__

#### Movies
`node liri.js movie-this <insert movie title>`

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.


__*If no parameter is provided, app is designed to output concert-this handle for Imagine Dragons*__

#### Do What It Says
`node liri.js do-what-it-says`

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run `spotify-this-song` for "I Want it That Way,".

Feel free to change the text in that document to test out the feature for other commands.

#### Sample
![](/images/ezgif.com-video-to-gif)

### Authors

Abraham Granillo

### License

MIT License