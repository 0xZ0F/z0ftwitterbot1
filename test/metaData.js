console.log("Bot Starting...");
// Setup:
var schedule = require('node-schedule');
const Twit = require('twit');
const config = require('../config');
const T = new Twit(config);
console.log("Bot Authenticated!");


//Do something to get meta data as an example.
