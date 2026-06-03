/**** NODE CORE MODULES ****/

// DEMO Import os, path, and fs (no relative path needed)
const os = require("os");
const path = require("path");
const fs = require("fs");

// es modules with package.json
// import os from 'os';
// imort path from 'path';
// import fs from 'fs';

// DEMO STEP 1: Gather raw environmental data using the OS module
const hostPlatform = os.platform(); // look at operation system platform
const currentUsername = os.userInfo().username // look at username

const diagnosticReport = `Arcade Engine Session Log\nUser: ${currentUsername} \n${hostPlatform}; `// create diagnostic report

// DEMO STEP 2: Construct a cross-platform file destination string for log.txt.
//prevent cross platform crashes 
const safeFilePath = path.join(process.cwd(), "log.txt");
console.log(`Target destination safely mapped: ${safeFilePath} `);

// DEMO STEP 3: Write the string data onto the hard drive.
fs.writeFileSync(safeFilePath, diagnosticReport);
// DEMO STEP 4: Read from the new file and log the result to the console.
try {
    const data =fs.readFileSync("log.txt", "UTF8");
    console.log(`LOG: \n${data}.`)
} catch(err) {
    console.error("Error reading file:", err);
}

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
