/**
 * Application Entry
 */

// Dependencies
const express = require('express');
const { PORT } = require('./config');

// Initializing App
const app = express();

// Setting up middleware
app.use(express.json());

// Initializing Server
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
})
