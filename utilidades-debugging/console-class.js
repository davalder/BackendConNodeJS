const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const consoleFile = new console.Console(out, err);

console.log(consoleFile);

// setInterval(() => {
//     consoleFile.log(new Date());
//     consoleFile.error(new Error('Oooops'));
// }, 2000);
