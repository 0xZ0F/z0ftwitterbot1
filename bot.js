console.log("Bot Starting...");
// Library setup and twit OAuth.
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
console.log("Bot Authenticated!");

dailyTweet();

var intervalID = setInterval(dailyTweet, 86400000); //Interval for when the dailyTweet function is ran. (Every x seconds.)

function dailyTweet() {
    //Generate Random Number                   Max         Min
    let randNum = Math.floor((Math.random() * 1000000000) + 0);
    
    T.post('statuses/update', { status: 'Z0F\'s Daily random number is: ' + randNum + "\n\nThe random number is randomly generated between 0 and 1 Billion. \nMore info here: https://github.com/kgoforth/z0ftwitterbot1" + "\n#Random #Z0F #Z0FRandomNumber #Z0FsRandomNumber"}, function(err, data, response) {    
        //If there is an error: Log it. Else: Say the tweet was successful and continue.
        if(err){
            console.error("There was an error posting a tweet! Here is the error:");
            console.log(err);
        }else{
            console.log("Tweet Successful!");
            console.log(data);
        }
    });
}