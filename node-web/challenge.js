const http = require('http');
const moment = require('moment');
const server = http.createServer(); // se crea servidor

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == "/echo") {
        let body = [];

        req
            .on("data", chunk => {
                body.push(chunk);
            })
            .on("end", () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                body = Buffer.concat(body).toString();
                console.log(body);
                let fechaNacimiento = body;
                res.end(moment(fechaNacimiento).format('dddd'));
            });
    } else {
        res.statusCode = 404;
        res.end();
    }

});

server.listen(8002);
console.log('servidor en la url http://localhost:8002');