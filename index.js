const http = require('node:http');
const fs = require('node:fs');
const path = require('path');


const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (path.extname(url.pathname)) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('./pages/404.html', 'utf8'));
        return;
    }
    fs.readFile('pages' + (url.pathname === ('/' || '') ? '/index' : url.pathname) + '.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(fs.readFileSync('./pages/404.html', 'utf8'));
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
        return;
    })
});

server.listen(8080);
