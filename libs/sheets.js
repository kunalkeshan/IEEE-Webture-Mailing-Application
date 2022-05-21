/**
 * Google Sheet's API Functions
 */

// Dependencies
const axios = require('axios');
const csv = require('csvtojson');
const { auth, google } = require('../utils/googleapi');
const { sheets, SHEET_KEYS } = require('../config');

// Sheets Lib Container
const sheetsLib = {}

sheetsLib.fetchAllParticipants = async () => {
    try {
        const response = await axios.get(sheets.ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL);
        const csvToJsonData = await csv().fromString(response.data);
        return csvToJsonData.map((data) => {
            return {
                name: data[SHEET_KEYS.NAME],
                email: data[SHEET_KEYS.EMAIL],
                phone: data[SHEET_KEYS.PHONE],
                registerNo: data[SHEET_KEYS.REGISTER_NO],
                token: data[SHEET_KEYS.TOKEN],
                paid: data[SHEET_KEYS.PAID] === 'Yes' ? true : false,
            }
        });
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.fetchConfirmedParticipants = async () => {
    try {
        const response = await axios.get(sheets.CONFIRMED_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL);
        const csvToJsonData = await csv().fromString(response.data);
        return csvToJsonData.map((data) => {
            return {
                name: data[SHEET_KEYS.NAME],
                email: data[SHEET_KEYS.EMAIL],
                phone: data[SHEET_KEYS.PHONE],
                registerNo: data[SHEET_KEYS.REGISTER_NO],
                token: data[SHEET_KEYS.TOKEN],
                paid: data[SHEET_KEYS.PAID] === 'Yes' ? true : false,
            }
        })
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.fetchPaidParticipants = async () => {
    try {
        const response = await axios.get(sheets.PAID_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL);
        const csvToJsonData = await csv().fromString(response.data);
        return csvToJsonData.map((data) => {
            return {
                name: data[SHEET_KEYS.NAME],
                email: data[SHEET_KEYS.EMAIL],
                phone: data[SHEET_KEYS.PHONE],
                registerNo: data[SHEET_KEYS.REGISTER_NO],
                token: data[SHEET_KEYS.TOKEN],
                paid: data[SHEET_KEYS.PAID] === 'Yes' ? true : false,
            }
        });
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.updateConfirmedParticipants = async ({ name, email, phone, registerNo, token }) => { };

sheetsLib.updatePaidParticipants = async ({ name, email, phone, registerNo, token }) => { };

module.exports = sheetsLib;

sheetsLib.fetchAllParticipants()