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

const REPEAT_CONFIRMATION_JOBS = '*/5 * * * *';
const REPEAT_PAID_JOBS = '*/7 * * * *';

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

// const sortPaidParticipants = async () => {
//     let allParticipants = await fetchAllParticipants();
//     const paidParticipants = await fetchPaidParticipants();
//     allParticipants = allParticipants.filter((participant) => participant.paid);
//     const sortedParticipants = allParticipants.filter((participant) => {
//         return !paidParticipants.find((paid) => {
//             return paid.email === participant.email;
//         })
//     });
//     return sortedParticipants;
// };

// Confirmation Jobs
// schedule.scheduleJob(REPEAT_CONFIRMATION_JOBS, async function () {
//     console.log(`Running Confirmation Job at ${new Date().toLocaleString()}`);
//     const confirmedParticipants = await sortConfirmedParticipants();
//     if (!confirmedParticipants.length) return;
//     confirmedParticipants.forEach(async (participant) => {
//         try {
//             await sendConfirmationEmail(participant);
//             await delay(1000);
//             await updateConfirmedParticipants(participant);
//         } catch (error) {
//             console.log(error);
//             await sendErrorMailToAdmin({ values: participant, error });
//         }
//     });
// });

// Payment Jobs
// schedule.scheduleJob(REPEAT_PAID_JOBS, async function () {
//     console.log(`Running Payment Job at ${new Date().toLocaleString()}`);
//     const paidParticipants = await sortPaidParticipants();
//     if (!paidParticipants.length) return;
//     paidParticipants.forEach(async (participant) => {
//         try {
//             await sendPaidEmail(participant);
//             await delay(1000);
//             await updatePaidParticipants(participant);
//         } catch (error) {
//             console.log(error);
//             await sendErrorMailToAdmin({ values: participant, error });
//         }
//     });
// });

async function delay(timeInMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeInMs);
    });
};

// (async () => {
//     try {
//         console.log(`Running Confirmation Job at ${new Date().toLocaleString()}`);
//         const confirmedParticipants = await fetchAllParticipants();
//         if (!confirmedParticipants.length) return;
//         // sendConfirmationEmail({
//         //     email: 'kunalkeshan12@gmail.com',
//         //     name: 'Kunal Keshan'
//         // })
//         confirmedParticipants.forEach(async (participant) => {
//             try {
//                 // await sendConfirmationEmail(participant);
//                 // await delay(1000);
//                 // await updateConfirmedParticipants(participant);
//             } catch (error) {
//                 console.log(error);
//                 await sendErrorMailToAdmin({ values: participant, error });
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
// })();