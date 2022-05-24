/**
 * Application Entry
 */

// Dependencies
const express = require('express');
const wakeDyno = require('woke-dyno');
const appRouter = require('./routers');
const { PORT } = require('./config');

// Initializing App
const app = express();
require('./agenda');

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Setting up routes
app.use(appRouter);

// Handle Errors

// Initializing Server
app.listen(PORT, () => {
    wakeDyno({
        url: 'https://ieee-bootcamp-2022-backend.onrender.com',
        interval: 600000, // 10 mins
    }).start(); 
    console.log(`Server is running on http://localhost:${PORT}`);
})
