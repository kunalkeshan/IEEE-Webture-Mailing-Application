/**
 * Mailer Utility
 */


// Dependencies
const { emailConfig, adminEmail } = require('../config');
const mailgun = require('mailgun-js')(emailConfig);

// Mailer Utility Container
const mailUtility = {};

mailUtility.sendConfirmationEmail = ({ email, name, token, registerNo, phone }) => {
    return new Promise((resolve, reject) => {
        const data = {
            from: "no-reply@ieeesrmist.in",
            to: email,
            subject: "IEEE SRMIST Student Branch - Registration Confirmation",
            html: `
                <h3>Registration Confirmation</h3>
                <p>Dear ${name},</p>
                <p>Thank you for registering for IEEE SRMIST Student Branch.</p>
                <p>Please go to the any of the following locations to confirm your payment:</p>
                <ul>
                    <li>Tech Park</li>
                    <li>Java Green</li>
                <ul>
                <p>Use this token for your reference: <b>${token}</b></p>
            `,
        };
        mailgun.messages().send(data, (error) => {
            if (error) return reject(error);
            return resolve();
        });
    })
};

mailUtility.sendPaidEmail = ({ email, name, token, registerNo, phone }) => {
    return new Promise((resolve, reject) => {
        const data = {
            from: "no-reply@ieeesrmist.in",
            to: email,
            subject: "IEEE SRMIST Student Branch - Payment Confirmation",
            html: `
                <h3>Payment Confirmation</h3>
                <p>Dear ${name},</p>
                <p>Thank you for registering for IEEE SRMIST Student Branch. Your registration has been confirmed.</p>
                <p>Use this token for your reference when attending the event: <b>${token}</b></p>
            `,
        };
        mailgun.messages().send(data, (error) => {
            if (error) return reject(error);
            return resolve();
        });
    });
};

mailUtility.sendErrorMailToAdmin = ({ email = adminEmail, values, error }) => {
    return new Promise((resolve, reject) => {
        const data = {
            from: adminEmail,
            to: email,
            subject: "IEEE SRMIST Student Branch - Error",
            html: `
                <h3>Error sending Mail</h3>
                <p>There was an error sending an email to the individual with the following details:</p>
                <ul>${
                    Object.keys(values).map((key) => {
                    return `<li>${key}: ${values[key]}</li>`}).join('')
                }</ul>
                <p>With the error:</p>
                <p>${error}</p>
            `,
        };
        mailgun.messages().send(data, (error) => {
            // if (error) return reject(error);
            return resolve();
        });
    });
};

module.exports = mailUtility;