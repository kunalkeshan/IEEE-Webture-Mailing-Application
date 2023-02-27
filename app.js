/**
 * Application Entry
 */

// Dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const appRouter = require('./routers');
const { PORT, DB_URL } = require('./config');
const { ApiError } = require('./utils/custom');
const errorHandler = require('./middlewares/error.middleware');

// Initializing App
const app = express();

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
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log('Connected to Database.');
    app.listen(PORT, () => {
        require('./utils/initialize');
        // require('./agenda');
        console.log(`Server is running on http://localhost:${PORT}.`);
    });
}).catch((error) => {
    console.log(`Error connecting to Database: ${error}`);
    process.exit(1);
})
