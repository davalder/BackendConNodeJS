const os = require('os');

//console.log('CPU info', os.cpus());

//console.log('IP adress', os.networkInterfaces());
//console.log('IP adress', os.networkInterfaces().wifi0.map(i => i.address));

console.log('Free memory', os.freemem());

console.log('Type OS', os.type());

console.log('SO version', os.release());

console.log('Usr info', os.userInfo());
