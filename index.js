const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'));
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact-me.html'));
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'));
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}`);
})