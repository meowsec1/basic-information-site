const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Home Page Here")
    }
    else if (req.url === '/about') {
        res.end("About Me Page Here")
    } else if (req.url === '/contact-me'){
        res.end("Contact Me Page Here")
    } else {
        res.end("404 Page Not Found")
    }
});

server.listen(8080);

