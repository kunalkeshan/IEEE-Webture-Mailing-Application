/**
 * App Routes
 */

// Dependencies
const Router = require('express').Router();
const { app } = require('../controllers');

Router.get('/', app.index);

Router.get('/api/participants-count', app.fetchNumberOfParticipants);

// Exporting Routes
module.exports = Router;