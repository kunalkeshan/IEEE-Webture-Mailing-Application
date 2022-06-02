/**
 * App Controller
 */

// Dependencies
const Participants = require('../models/Participants');
const { ApiError } = require('../utils/custom');

// App Controller Container
const appController = {};

/**
 * @description Respond with information about application
 * @api {GET} /
 * @access Public
 */
appController.index = (req, res, next) => {
    try {
        return res.status(200).json({
            message: 'IEEE Webture Bootcamp - 2022 - Mailing Application',
            description: 'Extracts information from the registrations made for the event, send\'s and confirmation mail and a paid mail once payment is done.',
            code: {
                repository: 'https://github.com/kunalkeshan/IEEE-Script-Day-Bootcamp-Backend',
                hosted: 'https://render.com'
            },
            createdBy: {
                name: 'Kunal Keshan',
                website: 'https://kunalkeshan.dev',
                github: 'https://github.com/kunalkeshan',
                twitter: 'https://twitter.com/_kunalkeshan_'
            }
        });
    } catch (error) {
        return next(error);
    }
};
/**
 * @description Respond with information about application
 * @api {GET} /api/participants-count
 * @access Public
 */
appController.fetchNumberOfParticipants = async (req, res, next) => {
    try {
        const count = await Participants.countDocuments();
        return res.status(200).json({
            success: true,
            message: 'Number of participants fetched successfully',
            data: {
                participants: {
                    count,
                }
            }
        })
    } catch (error) {
        error = new ApiError({ message: 'Unable to fetch participants!', statusCode: 500 });
        return next(error);
    }
}

// Export App Controller
module.exports = appController;