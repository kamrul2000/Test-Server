const http = require('http');
const fs = require('fs')
const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
    // res.end("Welcome to server");
    if (req.url === "/") {
        fs.readFile('index.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
    else if (req.url === "/about") {
        fs.readFile('about.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
    else {
        fs.readFile('error.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
});
server.listen(port, hostName, () => {
    console.log(`server runnig at http://${hostName}:${port}`);
});