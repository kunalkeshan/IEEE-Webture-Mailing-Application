/**
 * App Initialization Functions
 */

// Dependencies
const wakeDyno = require('woke-dyno');
const { DB_URL } = require('../config');

// Request to app to stop it from sleeping
// wakeDyno({
//     url: 'https://ieee-webture.herokuapp.com/',
//     interval: 600000, // 10 mins
// }).start();