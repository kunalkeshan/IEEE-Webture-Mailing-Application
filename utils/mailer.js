/**
 * Mailer Utility
 */


// Dependencies
const { emailConfig } = require('../config');
const mailgun = require('mailgun-js')(emailConfig);

// Mailer Utility Container
const mailUtility = {};

mailUtility.sendConfirmationEmail = ({ recipient, name, token, registerNo, phone }) => {
    return new Promise((resolve, reject) => {
        const data = {
            from: "IEEE SRMIST Student Branch <ieee@srmist.edu.in>",
            to: recipient,
            subject: "IEEE SRMIST Student Branch - Registration Confirmation",
            html: '',
        };
        mailgun.messages().send(data, (error) => {
            // if (error) return reject(error);
            return resolve();
        });
    })
};

mailUtility.sendPaidEmail = ({ recipient, name, token, registerNo, phone }) => {
    return new Promise((resolve, reject) => {
        const data = {
            from: "IEEE SRMIST Student Branch <ieee@srmist.edu.in",
            to: recipient,
            subject: "IEEE SRMIST Student Branch - Payment Confirmation",
            html: '',
        };
        mailgun.messages().send(data, (error) => {
            // if (error) return reject(error);
            return resolve();
        });
    });
};

module.exports = mailUtility;