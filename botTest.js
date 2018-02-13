/*console.log("Bot Starting...");
// Library setup and twit OAuth.
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
console.log("Bot Authenticated!");
*/
dailyTweet();

var intervalID = setInterval(dailyTweet, 10000); //Interval for when the dailyTweet function is ran. (Every x seconds.)

function dailyTweet() {
    //Generate Random Number                   Max         Min
    let randNum = Math.floor((Math.random() * 1000000000) + 0);
    let percentProb = (randNum/1000000000)*100;
    let finalProb = percentProb.toFixed(3) + "%";
    //console.log(randNum);
    //console.log("Generating a num lessthan or equal to this number is a", finalProb, "chance!");

    doStuff();
    function doStuff(){
        console.log("Z0F\'s Daily random number is:", randNum, "\nGenerating a number less than or equal to today's random number is a", finalProb, "chance!", "\n\nThe number is randomly generated between 0 and 1 Billion. \nMore info here: https://github.com/kgoforth/z0ftwitterbot1", "\n#Random #Z0F #Z0FRandomNumber #Code");
    }
}