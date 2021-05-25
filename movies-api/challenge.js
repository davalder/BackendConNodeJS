const express = require('express');
const app = express();
const moment = require('moment');

app.get('/', function (req, res) {
    res.send("Hello world");
});

app.post('/anno', function (req, res) {
    
    if (req.method === 'POST') {
        let body = [];

        req
            .on("data", chunk => {
                body.push(chunk);
            })
            .on("end", () => {

                body = Buffer.concat(body).toString();
                console.log(body);
                let anno = body;
                let fecha1 = moment(`${anno}-01-01`);
                let fecha2 = moment(`${anno}-12-31`);
                let diasAnno = fecha2.diff(fecha1, 'days');

                if (diasAnno == 365) {
                    res.send("Es año bisiesto");
                } else {
                    res.send("No es año bisiesto");
                }

            });
    } else {
        res.statusCode = 404;
        res.end();
    }
})



app.get('/json', function (req, res) {
    res.json({ hello: 'world' });
});

app.listen(3001, function () {
    console.log(`Listening http://localhost:3001`);
});