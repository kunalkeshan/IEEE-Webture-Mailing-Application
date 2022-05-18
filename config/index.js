/**
 * Application Configuration
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

// Configuration Container
const configuration = {
    isProduction,
    PORT: process.env.PORT || 5000,
};

// Exporting configuration
module.exports = configuration;