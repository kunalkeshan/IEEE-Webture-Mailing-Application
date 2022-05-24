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
schedule.scheduleJob(REPEAT_TEN_MINUTES, async function () {
    console.log(`Running Confirmation Job at ${new Date().toLocaleString()}`);
    const confirmedParticipants = await sortConfirmedParticipants();
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

// // Payment Jobs
// schedule.scheduleJob(REPEAT_FIFTEEN_MINUTES, async function () {
//     const paidParticipants = await sortPaidParticipants();
//     paidParticipants.forEach(async (participant) => {
//         await sendPaidEmail(participant).catch((error) => sendErrorMailToAdmin({ values: participant, error }));
//         await updatePaidParticipants(participant).catch((error) => sendErrorMailToAdmin({ values: participant, error }));
//     });
// });

// (async () => {
//     try {
//         console.log(await sortConfirmedParticipants());
//     } catch (error) {
//         console.log(error);
//     }
// })();