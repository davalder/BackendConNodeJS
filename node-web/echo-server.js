const http = require('http');
const server = http.createServer(); // se crea servidor

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == "/echo") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        res.end('Hello world\n'); //responde al cliente con .end
    } else {
        res.statusCode = 404;
        res.end();
    }

});

server.listen(8001);
console.log('servidor en la url http://localhost:8001');
