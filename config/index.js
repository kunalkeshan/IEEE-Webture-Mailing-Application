/**
 * Application Configuration
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const sheets = {
    ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ?
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSlaIDKtVUWTamRZ2sxnKhNjkrTalBMA0gAPKdGVGNh8TG3lR71ZM1CuqXJTl06ZLUIZEgX2mv5w2-V/pub?gid=0&single=true&output=csv'
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
    adminEmail: isProduction ? 'kk1738@srmist.edu.in' : 'kk1738@srmist.edu.in',
    nodemailerConfig: {
        email: process.env.EMAIL_MAIL,
        pass: process.env.EMAIL_PASS,
    }
};

// Exporting configuration
module.exports = configuration;
