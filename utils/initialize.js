/**
 * App Initialization Functions
 */

// Dependencies
const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const wakeDyno = require('woke-dyno');

// Request to app to stop it from sleeping
wakeDyno({
    url: 'https://ieee-bootcamp-2022-backend.onrender.com',
    interval: 600000, // 10 mins
}).start();

// Creating Directory if not exists
(() => {
    const DIRECTORIES = [
        path.resolve('.data')
    ];
    DIRECTORIES.forEach((directory) => {
        if (fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });
    })
    console.log(`Directories created: ${DIRECTORIES.join(', ')}`);
})();

// Creating File if not exists
(() => {
    const FILES = [
        path.resolve('.data', 'participants.json'),
    ]
    FILES.forEach((file) => {
        if (fs.existsSync(file)) fs.openSync(file, 'w');
    });
    console.log(`Files created: ${FILES.join(', ')}`);
})();
