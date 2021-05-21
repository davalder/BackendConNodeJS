// %s significa string
// %d significa numero
//%j es JSON

console.log('Un %s y un $s', 'perrito', 'gatico');

console.info('hello world');
console.warn('Hello error');

//console.assert(42 === '42'); // muestra un error

//console.trace('hello');

const util = require('util');

const debuglog = util.debuglog('foo');

debuglog('hello from foo');