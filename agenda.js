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
        return !confirmedParticipants.includes(participant["What's your SRMIST email address?"])
    });
    return sortedParticipants;
};

const sortPaidParticipants = async () => {
    const allParticipants = await fetchAllParticipants();
    const paidParticipants = await fetchPaidParticipants();
    const sortedParticipants = allParticipants.filter(participant => {
        return !paidParticipants.includes(participant["What's your SRMIST email address?"])
    });
    return sortedParticipants;
};

// // Confirmation Jobs
// schedule.scheduleJob(REPEAT_TEN_MINUTES, async function () {
//     const confirmedParticipants = await sortConfirmedParticipants();
//     confirmedParticipants.forEach(async (participant) => {
//         await sendConfirmationEmail(participant);
//         await updateConfirmedParticipants(participant);
//     });
// });

// // Payment Jobs
// schedule.scheduleJob(REPEAT_FIFTEEN_MINUTES, async function () {
//     const paidParticipants = await sortPaidParticipants();
//     paidParticipants.forEach(async (participant) => {
//         await sendPaidEmail(participant);
//         await updatePaidParticipants(participant);
//     });
// });

(async () => {
    try{
        console.log(await sortPaidParticipants());    
    } catch(error) {
        console.log(error);
    }
})();