const http = require('http');
const template = require('./hbsTemplate');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.write(template());
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`The server was started with http://${hostname}:${port}`);
});