var axios = require("axios");
var fs = require('fs');
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

var getArtistNames = function(artist) {
    return artist.name;
}

//This constructor contains the methods to get JSON objects
var SONG = function(){

    //This will put a divider line for each result
    var divider = "\n------------------------------------------------------\n\n";


    this.getArtist = function(artist){
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function(response){

            var jsonData = response.data;

            for(var i = 0; i < jsonData.length; i++){

                console.log("Name of the Venue: " + jsonData[i].venue.name);
                console.log("Venue Location: " + jsonData[i].venue.city + ","+jsonData[i].venue.country);
                console.log("Date of the Event: " + jsonData[i].datetime);
                console.log("\n---------------------------------------------------------------\n");
               
            }
            

        });

    };

    this.getSpotify = function(songName){

        spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
        
            var songs = data.tracks.items; 
            for(var i = 0; i < songs.length; i++){
               
                console.log(i);
                console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("previous song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("--------------------------------------------------------------");
                
            }

            var songData = [i];
            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        
        });


    },

    this.getMovie = function(movie){
        var URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

        axios.get(URL).then(function(response){

            var jsonData = response.data;

            var movieData = [
            "\nTitle: " + jsonData.Title,
            "Year: " + jsonData.Year,
            "IMDB Rating: " + jsonData.imdbRating,
            "Rotten Tomatoes rating: " + jsonData.tomatoRating,
            "Country: " + jsonData.Country,
            "Language: " + jsonData.Language,
            "Plot: " + jsonData.Plot,
            "Actors: " + jsonData.Actors,
            ].join("\n");

            fs.appendFile("log.txt", movieData + divider, function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
        

    };

}

    



module.exports = SONG;