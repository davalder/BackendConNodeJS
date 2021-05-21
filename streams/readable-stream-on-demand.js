const { Readable } = require('stream');
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentCharCode > 90) { //90 es la Z
                this.push(null);
                return;
            }

            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100)
    }
});

readableStream.currentCharCode = 65 // 65 es la A

readableStream.pipe(process.stdout);