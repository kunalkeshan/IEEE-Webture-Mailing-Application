/**
 * Application Configuration
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV !== 'production';

const sheets = {
    ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ? '' : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDOJbJeNMWiG9tq7mGFv0C7Dz_XFwb_7LBC8eCtTUJcM63BtKazIIYKTcb62OKjOUc7zrmEqYkbZrD/pub?gi:835525227&single=true&output=csv',
    CONFIRMED_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ? '' : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTZ-UITnO8R0Re9XF3KkStlnU4lb2l2XxdRaWiQSgpnxgaV97vejV6f31kLRU8lTtPH-0I4ZqFPfr4e/pub?gid=0&single=true&output=csv',
    PAID_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ? '' : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTZ-UITnO8R0Re9XF3KkStlnU4lb2l2XxdRaWiQSgpnxgaV97vejV6f31kLRU8lTtPH-0I4ZqFPfr4e/pub?gid=1533300079&single=true&output=csv',
    ALL_PARTICIPANTS_SPREADSHEET_ID: isProduction ? '' : '1NH5N5MdtX6PUYCvpsa6yqfCq-hJN_InIue60j11Ygto',
    CONFIRMED_AND_PAID_PARTICIPANTS_SPREADSHEET_ID: isProduction ? '' : '18nz_SDMo-FsklhavmkCA8JpAFOFMo0cXaMnXIzOZtfw',
    CONFIRMED_RANGE: isProduction ? '' : 'Confirmed!A:G',
    PAID_RANGE: isProduction? '' : 'Paid!A:G',
}
const SHEET_KEYS = {
    EMAIL: "What's your SRMIST email address?",
    PHONE: "What's your phone number?",
    REGISTER_NO: "What's your Register Number?",
    TOKEN: "Token",
    NAME: "What's your full name?",
    SUBMITTED_AT: "Submitted At",
    PAID: "Paid",
}

// Configuration Container
const configuration = {
    isProduction,
    PORT: process.env.PORT || 5000,
    sheets,
    SHEET_KEYS,
    adminEmail: 'kk1738@srmist.edu.in',
    emailConfig: {
        apiKey: process.env.EMAIL_API_KEY,
        domain: process.env.EMAIL_DOMAIN,
    }
};

// Exporting configuration
module.exports = configuration;
