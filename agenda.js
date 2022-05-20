/**
 * Schedule Jobs
 */

// Dependencies
const schedule = require('node-schedule');
const {
    fetchAllParticipants,
    fetchConfirmedParticipants,
    fetchPaidParticipants,
    updateConfirmedParticipants,
    updatePaidParticipants
} = require('./libs/sheets');
const { sendConfirmationEmail, sendPaidEmail } = require('./utils/mailer');
const REPEAT_TEN_MINUTES = '*/10 * * * *';
const REPEAT_FIFTEEN_MINUTES = '*/15 * * * *';

const sortConfirmedParticipants = async () => {
    const allParticipants = await fetchAllParticipants();
    const confirmedParticipants = await fetchConfirmedParticipants();
    const sortedParticipants = allParticipants.filter(participant => {
        return confirmedParticipants.find(confirmedParticipant => {
            return confirmedParticipant.email === participant.email;
        });
    });
    return sortedParticipants;
};

const sortPaidParticipants = async () => {
    const allParticipants = await fetchAllParticipants();
    const paidParticipants = await fetchPaidParticipants();
    const sortedParticipants = allParticipants.filter(participant => {
        return paidParticipants.find(paidParticipant => {
            return paidParticipant.email === participant.email;
        });
    });
    return sortedParticipants;
};

// Confirmation Jobs
schedule.scheduleJob(REPEAT_TEN_MINUTES, async function () {
    const confirmedParticipants = await sortConfirmedParticipants();
    confirmedParticipants.forEach(async (participant) => {
        await sendConfirmationEmail(participant);
        await updateConfirmedParticipants(participant);
    });
});

// Payment Jobs
schedule.scheduleJob(REPEAT_FIFTEEN_MINUTES, async function () {
    const paidParticipants = await sortPaidParticipants();
    paidParticipants.forEach(async (participant) => {
        await sendPaidEmail(participant);
        await updatePaidParticipants(participant);
    });
});

