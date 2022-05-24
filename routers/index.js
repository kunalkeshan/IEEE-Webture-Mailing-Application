/**
 * Application Router Hub
 */

// Dependencies
const Router = require('express').Router();
const appRouter = require('./app.routes');

Router.use('/', appRouter);

// Exporting Routes
module.exports = Router;