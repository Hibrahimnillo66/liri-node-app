require("dotenv").config();
var fs = require('fs');

var SONG = require("./searchapi.js");


var song = new SONG();

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");


// By default, if no search type is provided, search for a tv show
if (!search) {
	search = "concert-this";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
	term = "imagine dragons";
}

doWhatItSays = function(){
    fs.readFile('random.text', 'utf8', (err, data) => {
        if (err) throw err;
        
        var dataArr = data.split(",");

        if(dataArr.length == 2){
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            pick(dataArr[0]);
        }
    });


}

var pick = function(caseData, term) {
    switch(caseData) {
        case 'concert-this':
            console.log("\nUpcoming concerts for: "+ term + "\n");
            song.getArtist(term);
            break;
        case "spotify-this-song":
        console.log("\nArtists that contain " + term + " in one of their songs. \n")
            song.getSpotify(term);
            break;
        case "movie-this":
            song.getMovie(term);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default: 
        console.log('LIRI does not know that');
    }
}

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(search,term);