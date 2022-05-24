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
const { sendConfirmationEmail, sendPaidEmail, sendErrorMailToAdmin } = require('./utils/mailer');
const REPEAT_CONFIRMATION_JOBS = '*/10 * * * *';
const REPEAT_PAID_JOBS = '*/13 * * * *';

const sortConfirmedParticipants = async () => {
    const allParticipants = await fetchAllParticipants();
    const confirmedParticipants = await fetchConfirmedParticipants();
    const sortedParticipants = allParticipants.filter((participant) => {
        return !confirmedParticipants.find((confirmed) => {
            return confirmed.email === participant.email;
        })
    });
    return sortedParticipants;
};

const sortPaidParticipants = async () => {
    let allParticipants = await fetchAllParticipants();
    allParticipants = allParticipants.filter((participant) => participant.paid);
    const paidParticipants = await fetchPaidParticipants();
    const sortedParticipants = allParticipants.filter((participant) => {
        return !paidParticipants.find((paid) => {
            return paid.email === participant.email;
        })
    });
    return sortedParticipants;
};

// Confirmation Jobs
schedule.scheduleJob(REPEAT_CONFIRMATION_JOBS, async function () {
    console.log(`Running Confirmation Job at ${new Date().toLocaleString('en-IN')}`);
    const confirmedParticipants = await sortConfirmedParticipants();
    if (!confirmedParticipants.length) return;
    confirmedParticipants.forEach(async (participant) => {
        try {
            await sendConfirmationEmail(participant)
            await updateConfirmedParticipants(participant)
        } catch (error) {
            console.log(error);
            await sendErrorMailToAdmin({ values: participant, error });
        }
    });
});

// Payment Jobs
schedule.scheduleJob(REPEAT_PAID_JOBS, async function () {
    console.log(`Running Payment Job at ${new Date().toLocaleString('en-IN')}`);
    const paidParticipants = await sortPaidParticipants();
    if (!paidParticipants.length) return;
    paidParticipants.forEach(async (participant) => {
        try {
            await sendPaidEmail(participant);
            await updatePaidParticipants(participant);
        } catch (error) {
            console.log(error);
            await sendErrorMailToAdmin({ values: participant, error });
        }
    });
});