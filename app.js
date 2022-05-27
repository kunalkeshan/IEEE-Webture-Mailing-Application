/**
 * Application Entry
 */

// Dependencies
const express = require('express');
const cors = require('cors');
const appRouter = require('./routers');
const { PORT } = require('./config');
const { ApiError } = require('./utils/custom');
const errorHandler = require('./middlewares/error.middleware');

// Initializing App
const app = express();
require('./agenda');

// Setting up middleware
app.use(cors({
    optionsSuccessStatus: 200,
    methods: 'GET',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up routes
app.use(appRouter);

// Handle Errors
app.use((req, res, next) => {
    const err = new ApiError({ message: `The requested endpoint: ${req.originalUrl} does not exist in this server`, statusCode: 404 });
    return next(err);
});
app.use(errorHandler);

// Initializing Server
app.listen(PORT, () => {
    require('./utils/initialize');
    console.log(`Server is running on http://localhost:${PORT}`);
});
