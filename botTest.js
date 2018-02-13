/*console.log("Bot Starting...");
// Library setup and twit OAuth.
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
console.log("Bot Authenticated!");
*/

var schedule = require('node-schedule');

var j = schedule.scheduleJob('20 * * * * *', function(asdf){
    //Generate Random Number                   Max         Min
    let randNum = Math.floor((Math.random() * 1000000000) + 0);
    let percentProb = (randNum/1000000000)*100;
    let finalProb = percentProb.toFixed(3) + "%";

    doStuff();
    function doStuff(){
        console.log("Z0F\'s Daily random number is: " + randNum + "\nGenerating a number less than or equal to today's random number is a " + finalProb + " chance!" + "\n\nThe number is randomly generated between 0 and 1 Billion. \nMore info here: https://github.com/kgoforth/z0ftwitterbot1" + "\n#Random #Z0F #Z0FRandomNumber #Code");
    }
});




/*var stream = T.stream('user');
stream.on('tweet', botCommands);
botCommands();
function botCommands(){
    T.get('statuses/user_timeline', { q: 'Banana', id_str: "946461795916636160" }, function(err, data, response) {
        console.log("Found Tweet!");
    })
}*/