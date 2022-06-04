/**
 * Application Configuration
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV !== 'production';

const sheets = {
    ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ?
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZNNePanQJ2AK01qTwOo0B6m_EUUADfYYmfQwJrJCS7tdEVBlD4oKVrTnlR68JhMf0tC4cnnfVa04j/pub?gid=663776539&single=true&output=csv'
        : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDOJbJeNMWiG9tq7mGFv0C7Dz_XFwb_7LBC8eCtTUJcM63BtKazIIYKTcb62OKjOUc7zrmEqYkbZrD/pub?gi:835525227&single=true&output=csv',
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
    emailConfig: {
        apiKey: process.env.EMAIL_API_KEY,
        domain: process.env.EMAIL_DOMAIN,
    }
};

// Exporting configuration
module.exports = configuration;
