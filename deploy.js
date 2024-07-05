const http = require('http');
const fs = require('fs');
const port = process.env.port;

const server = http.createServer((req, res) => {
    // res.end("welcome to server")
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        });
    }
    else if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        });
    }

    else {
        fs.readFile('error.html', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        });
    }
})
server.listen(port, () => {
    console.log("server running")
});