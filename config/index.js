/**
 * Application Configuration
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const sheets = {
    ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ?
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vT78kCQKYBM1ISFr2CJY5A4L-EJK0NQq74FOnLcCgpA491-oIAbNsVL1O2dhFuvDXjniQhzsFkV0Vf4/pub?gid=327840845&single=true&output=csv'
        : '',
}

const DB_URL = isProduction ? process.env.DB_URL_PROD : process.env.DB_URL_TEST;

const SHEET_KEYS = {
    EMAIL: "Team Lead's SRMIST Email ID?",
    PHONE: "Team Lead's Contact Number:",
    REGISTER_NO: "What's your Register Number?",
    TOKEN: "Token",
    NAME: "First off, what'd we call your team?",
    SUBMITTED_AT: "Submitted At",
    PAID: "Paid",
}

const SHEET_KEYS_PROD = {
    EMAIL: 'Team Lead\'s SRMIST Email ID?This question is required.',
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
