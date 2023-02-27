/**
 * Application Configuration
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const sheets = {
    ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ?
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9wi2mWYO19FMIljjDnrrRosY3HLokkd08gt15O90jIwrGsImd8Gy-Kn1rE3G0wv2NGWCmEJQmJ20/pub?gid=119849876&single=true&output=csv'
        : '',
}

const DB_URL = isProduction ? process.env.DB_URL_PROD : process.env.DB_URL_TEST;

const SHEET_KEYS = {
    EMAIL: 'Email',
    PHONE: 'Phone',
    REGISTER_NO: 'Reg',
    TOKEN: 'Token',
    NAME: 'Name',
    SUBMITTED_AT: 'Submitted At',
    PAID: 'Paid',
}

const SHEET_KEYS_PROD = {
    EMAIL: 'Email',
    PHONE: 'Phone',
    REGISTER_NO: 'Reg',
    TOKEN: 'Token',
    NAME: 'Name',
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
