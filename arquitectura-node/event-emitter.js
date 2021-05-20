const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger();

logger.on('start', () => console.log('Starting'));
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log('It\'s Done'));
logger.on('start', () => console.log('Starting2')); //en la impresion se conserva el orden del emitter

logger.execute(() => console.log('Hello world'));  //
//logger.execute(() => setTimeout(() => console.log('hello world'), 1000)); // si ejecutamos codifo asincrono el orden no permanece