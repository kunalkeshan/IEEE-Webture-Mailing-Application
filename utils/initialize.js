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
(async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Database');
    } catch (error) {
        console.log(`Error connecting to Database: ${error}`);
    }
})();