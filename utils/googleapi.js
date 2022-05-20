/**
 * Google API Config
 */

// Dependencies
const { google } = require('googleapis');

const ALL_PARTICIPANTS_SPREADSHEET_ID = '';
const CONFIRMED_PARTICIPANTS_SPREADSHEET_ID = '';

const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

module.exports = {
    auth,
    google,
}
