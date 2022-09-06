/**
 * Application Configuration
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const sheets = {
    ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ?
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSApO_kbepcQ2UBwUmqoyWaf1Wmx25VVsgNkOlRZTuuYyK2bO9OZ2B7zOzwgmm8TwePQkzg0p3F4iXd/pub?gid=1039896981&single=true&output=csv'
        : '',
}

const DB_URL = isProduction ? process.env.DB_URL_PROD : process.env.DB_URL_TEST;

const SHEET_KEYS = {
    EMAIL: "What's your SRMIST email address?",
    PHONE: "What's your phone number?",
    REGISTER_NO: "What's your Register Number?",
    TOKEN: "Token",
    NAME: "What's your full name?",
    SUBMITTED_AT: "Submitted At",
    PAID: "Paid",
}

const SHEET_KEYS_PROD = {
    EMAIL: 'Your SRMIST Email ID?',
    PHONE: 'Your Contact Number:',
    REGISTER_NO: 'What\'s your SRM Register Number?',
    TOKEN: 'Token',
    NAME: 'First off,  what\'d we call you?',
    SUBMITTED_AT: 'Submitted At',
    PAID: 'Paid',
};

// Configuration Container
const configuration = {
    isProduction,
    PORT: process.env.PORT || 5000,
    sheets,
    DB_URL,
    SHEET_KEYS: isProduction ? SHEET_KEYS_PROD : SHEET_KEYS,
    adminEmail: isProduction ? 'kk1234@srmist.edu.in' : 'kk1738@srmist.edu.in',
    nodemailerConfig: {
        email: process.env.EMAIL_MAIL,
        pass: process.env.EMAIL_PASS,
    }
};

// Exporting configuration
module.exports = configuration;
