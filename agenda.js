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
const REPEAT_TEN_MINUTES = '*/10 * * * *';
const REPEAT_FIFTEEN_MINUTES = '*/15 * * * *';

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
    const allParticipants = await fetchAllParticipants();
    const paidParticipants = await fetchPaidParticipants();
    const sortedParticipants = allParticipants.filter((participant) => {
        return !paidParticipants.find((paid) => {
            return paid.email === participant.email;
        })
    });
    return sortedParticipants;
};

// Confirmation Jobs
schedule.scheduleJob('*/10 * * * * *', async function () {
    console.log(`Running Confirmation Job at ${new Date().toLocaleString()}`);
    const confirmedParticipants = await sortConfirmedParticipants();
    confirmedParticipants.forEach((participant) => {
        sendConfirmationEmail(participant).catch((error) => sendErrorMailToAdmin({ values: participant, error }));
        updateConfirmedParticipants(participant).catch((error) => sendErrorMailToAdmin({ values: participant, error }));
    });
});

// // Payment Jobs
// schedule.scheduleJob(REPEAT_FIFTEEN_MINUTES, async function () {
//     const paidParticipants = await sortPaidParticipants();
//     paidParticipants.forEach((participant) => {
//         sendPaidEmail(participant).catch((error) => sendErrorMailToAdmin({ values: participant, error }));
//         updatePaidParticipants(participant).catch((error) => sendErrorMailToAdmin({ values: participant, error }));
//     });
// });

// (async () => {
//     try {
//         console.log(await sortPaidParticipants());
//     } catch (error) {
//         console.log(error);
//     }
// })();