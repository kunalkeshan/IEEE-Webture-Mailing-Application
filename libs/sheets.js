/**
 * Google Sheet's API Functions
 */

// Dependencies
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const csv = require('csvtojson');
const { sheets, SHEET_KEYS } = require('../config');

const PARTICIPANTS_FILE_PATH = path.resolve('.data', 'participants.json');

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
                submittedAt: data[SHEET_KEYS.SUBMITTED_AT],
                paid: data[SHEET_KEYS.PAID] === 'Yes' ? true : false,
            }
        });
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.fetchConfirmedParticipants = async () => {
    try {
        const { participants } = JSON.parse(fs.readFileSync(PARTICIPANTS_FILE_PATH));
        return participants;
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.fetchPaidParticipants = async () => {
    try {
        let { participants } = JSON.parse(fs.readFileSync(PARTICIPANTS_FILE_PATH));
        participants = participants.filter((participant) => participant.paid);
        return participants;
    } catch (error) {
        return Promise.reject(error);
    }
};

/**
 * Order of Filling Up Sheets
 * | Name | Email | Phone | Register No | Submitted At | Token | Paid |
 * Does not matter in JSON
 */

sheetsLib.updateConfirmedParticipants = async (participant) => {
    try {
        let { participants } = JSON.parse(fs.readFileSync(PARTICIPANTS_FILE_PATH));
        participants = [...participants, participant];
        fs.writeFileSync(PARTICIPANTS_FILE_PATH, JSON.stringify({ participants }, null, '\t'));
    } catch (error) {
        return Promise.reject(error);
    }
};

sheetsLib.updatePaidParticipants = async ({ email, paid }) => {
    try {
        let { participants } = JSON.parse(fs.readFileSync(PARTICIPANTS_FILE_PATH));
        participants.forEach((participant) => {
            if (participant.email === email) participant.paid = paid;
        })
        fs.writeFileSync(PARTICIPANTS_FILE_PATH, JSON.stringify({ participants }, null, '\t'));
    } catch (error) {
        return Promise.reject(error);
    }
};

module.exports = sheetsLib;
