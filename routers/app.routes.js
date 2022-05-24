/**
 * App Routes
 */

// Dependencies
const Router = require('express').Router();

Router.get('/', (req, res) => {
    return res.send('hiii');
})

// Exporting Routes
module.exports = Router;