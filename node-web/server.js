const http = require('http');
const server = http.createServer(); // se crea servidor

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello world\n'); //responde al cliente con .end
});

server.listen(8000);
console.log('servidor en la url http://localhost:8000');
