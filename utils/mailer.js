/**
 * Mailer Utility
 */


// Dependencies
const nodemailer = require('nodemailer');
const { adminEmail, nodemailerConfig } = require('../config');
const { confirmedEmail, paidEmail } = require('../templates');

// Mailer Utility Container
const mailUtility = {};

// Mail Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: nodemailerConfig.email,
        pass: nodemailerConfig.pass,
    },
    pool: true,
    from: 'IEEE SRMIST <ieee.srmist.edu.in>'
});

mailUtility.sendConfirmationEmail = ({ email, name, token, registerNo, phone }) => {
    return new Promise((resolve, reject) => {
        const data = {
            to: email,
            subject: 'Hello, Cloud! Event Confirmation | IEEE SRM SB',
            html: confirmedEmail({ name, token, registerNo }),
        };
        return transporter.sendMail(data, (error, info) => {
            if (error) return reject(error);
            return resolve();
        })
    });
}

mailUtility.sendPaidEmail = ({ email, name, token, registerNo, phone }) => {
    return new Promise((resolve, reject) => {
        const data = {
            to: email,
            subject: "Payment Confirmed | Webture IEEE SRM",
            html: paidEmail({ name, token }),
        };
        return transporter.sendMail(data, (error, info) => {
            if (error) return reject(error);
            return resolve();
        });
    });
};

mailUtility.sendErrorMailToAdmin = ({ email = adminEmail, values, error }) => {
    return new Promise((resolve, reject) => {
        const data = {
            to: adminEmail,
            subject: "Webture Mailing Service - Error Sending Email",
            html: `
                <h3>Error sending Mail</h3>
                <p>There was an error sending an email to the individual with the following details:</p>
                <ul>${Object.keys(values).map((key) => {
                return `<li>${key}: ${values[key]}</li>`
            }).join('')
                }</ul>
                <p>With the error:</p>
                <p>${error}</p>
            `,
        };
        return transporter.sendMail(data, (error, info) => {
            // if (error) return reject(error);
            return resolve();
        });
    });
};

module.exports = mailUtility;