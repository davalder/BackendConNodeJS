const { Transform } = require('stream');

const camelCaseStream = new Transform({
    transform(chunk, encoding, cb) {
        data = `"${chunk.toString()}`;
        textFinish = function cameCase(data) {
            return data.replace(/\W+(.)/g, function (match, newData) {
                return newData.toUpperCase();
            });
        };
        this.push(textFinish(data));
        cb();
    }
});

process.stdin.pipe(camelCaseStream).pipe(process.stdout);