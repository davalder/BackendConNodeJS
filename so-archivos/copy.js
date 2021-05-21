const fs = require('fs');

fs.copyFile('naranja.txt','limon.txt', err => {
    if(err) {
        return console.log(err);
    }

    console.log('Naranja.txt fue copiado con exito');
})