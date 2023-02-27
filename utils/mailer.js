/**
 * Mailer Utility
 */


// Dependencies
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')
const { adminEmail, nodemailerConfig } = require('../config');
const { fetchAllParticipants } = require('../libs/sheets');
const { confirmedEmail, paidEmail } = require('../templates');


// Mailer Utility Container
const mailUtility = {};

// Mail Transporter
const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: nodemailerConfig.email,
        pass: nodemailerConfig.pass,
    },
    pool: true,
    from: 'IEEE SRMIST <ieee.srmist.edu.in>',
    secure: false,
}));

mailUtility.sendConfirmationEmail = ({ email, name, token, registerNo, phone, bcc = '' }) => {
    return new Promise((resolve, reject) => {
        const data = {
            to: email,
            subject: 'Welcome to IEEE SRM SB - Join Our WhatsApp Group',
            html: confirmedEmail({ name, token, registerNo }),
        };
        return transporter.sendMail(data, (error, info) => {
            if (error) return reject(error);
            console.log(`Email sent to ${email}`);
            transporter.close();
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
            transporter.close();
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

// (async () => {
//     try {
//         const participants = await fetchAllParticipants();
//         const emails = participants.map((p) => p.email).join(', ');
//         transporter.sendMail({
//             bcc: emails,
//             subject: 'Welcome to IEEE SRM SB - Join Our WhatsApp Group',
//             html: confirmedEmail({}),
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })();