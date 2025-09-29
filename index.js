const http = require('node:http');
const fs = require('node:fs');


let homeContents, aboutContents, contactContents, notFoundContents;


try {
    homeContents = fs.readFileSync('./pages/index.html', 'utf8');
    aboutContents = fs.readFileSync('./pages/about.html', 'utf8');
    contactContents = fs.readFileSync('./pages/contact-me.html', 'utf8');
    notFoundContents = fs.readFileSync('./pages/404.html', 'utf8');
} catch (error) {
    console.log("Something went wrong: ", error);
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    switch(req.url) {
        case '/':
            res.end(homeContents);
            break;
        case '/about':
            res.end(aboutContents);
            break;
        case '/contact-me':
            res.end(contactContents);
            break;
        default:
            res.end(notFoundContents);
            break;
    }
});

server.listen(8080);
