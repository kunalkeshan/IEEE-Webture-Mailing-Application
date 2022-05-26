/**
 * App Initialization Functions
 */

// Dependencies
const fs = require('fs');
const path = require('path');
// const wakeDyno = require('woke-dyno');

// Request to app to stop it from sleeping | WRITTEN FOR RENDER AND HEROKU
// wakeDyno({
//     url: 'https://ieee-bootcamp-2022-backend.onrender.com',
//     interval: 600000, // 10 mins
// }).start();

// Creating Directory if not exists
(() => {
    const DIRECTORIES = [
        path.resolve('.data')
    ];
    try {
        DIRECTORIES.forEach((directory, index) => {
            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory, { recursive: true })
                if (index === DIRECTORIES.length - 1) console.log(`Directories created: ${DIRECTORIES.join(', ')}`);
            };
        })
    } catch (error) {
        console.log(`Error creating directories: ${error}`);
    }
})();

// Creating File if not exists
(() => {
    const FILES = [
        path.resolve('.data', 'participants.json'),
    ]
    try {
        FILES.forEach((file, index) => {
            if (!fs.existsSync(file)) {
                fs.writeFileSync(file, JSON.stringify({ participants: [] }, null, '\t'), {flag: 'w'});
                if (index === FILES.length - 1) console.log(`Files created: ${FILES.join(', ')}`);
            };
        });
    } catch (error) {
        console.log(`Error creating files: ${error}`);
    }
})();
