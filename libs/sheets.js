/**
 * Google Sheet's API Functions
 */

// Dependencies
const axios = require('axios');
const csv = require('csvtojson');
const { auth, google } = require('../utils/googleapi');
const { sheets } = require('../config');

// Sheets Lib Container
const sheetsLib = {}

sheetsLib.fetchAllParticipants = async () => {
    try {
        const response = await axios.get(sheets.ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL);
        const csvToJsonData = await csv().fromString(response.data);
        return csvToJsonData;
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.fetchConfirmedParticipants = async () => {
    try {
        const response = await axios.get(sheets.CONFIRMED_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL);
        const csvToJsonData = await csv().fromString(response.data); 
        return csvToJsonData; 
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.fetchPaidParticipants = async () => {
    try {
        const response = await axios.get(sheets.PAID_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL);
        const csvToJsonData = await csv().fromString(response.data);
        return csvToJsonData;
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.updateConfirmedParticipants = async ({name, email, phone, registerNo, token}) => { };

sheetsLib.updatePaidParticipants = async ({name, email, phone, registerNo, token}) => { };

module.exports = sheetsLib;

sheetsLib.fetchAllParticipants()