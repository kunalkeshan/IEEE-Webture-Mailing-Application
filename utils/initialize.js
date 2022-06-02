/**
 * App Initialization Functions
 */

// Dependencies
const mongoose = require('mongoose');
const wakeDyno = require('woke-dyno');

// Request to app to stop it from sleeping
wakeDyno({
    url: 'https://ieee-webture.herokuapp.com/',
    interval: 600000, // 10 mins
}).start();

// Connect to Database
