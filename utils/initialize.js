/**
 * App Initialization Functions
 */

// Dependencies
const fs = require('fs');
const path = require('path');

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
