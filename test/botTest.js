console.log("Bot Starting...");
// Library setup and twit OAuth.
const Twit = require('twit');
const config = require('../config');
const T = new Twit(config);
console.log("Bot Authenticated!");


/*var schedule = require('node-schedule');
// Run the function at the set time. Second, Minute, Hour, Day, Week, Month.
var j = schedule.scheduleJob('20 * * * * *', function(asdf){
    //Generate Random Number                   Max         Min
    let randNum = Math.floor((Math.random() * 1000000000) + 0);
    let percentProb = (randNum/1000000000)*100;
    let finalProb = percentProb.toFixed(3) + "%";
    //This is in a function to simulate the post function on the live version.
    doStuff();
    function doStuff(){
        console.log("Z0F\'s Daily random number is: " + randNum + "\nGenerating a number less than or equal to today's random number is a " + finalProb + " chance!" + "\n\nThe number is randomly generated between 0 and 1 Billion. \nMore info here: https://github.com/kgoforth/z0ftwitterbot1" + "\n#Random #Z0F #Z0FRandomNumber #Code");
    }
});*/

//COMMANDS:
var userID = '946461795916636160';
var stream = T.stream('statuses/filter', { follow: ( userID ) });
stream.on('tweet', function (tweet) {

	if (tweet.user.id == userID) {
		console.log("You have tweeted something!");
	}else{
		console.log(tweet.user.id + " - " + tweet.user.screen_name)
    }
    if(tweet.text == "apple"){
        //REPLY
    }
});