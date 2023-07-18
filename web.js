const http = require('http');
const port = 5000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                console.error(err);
                res.write("<h1>500 Internal Server Error</h1>");
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === "/hanoi") {
        fs.readFile("hanoi.html", (err, data) => {
            if (err) {
                console.error(err);
                res.write("<h1>500 Internal Server Error</h1>");
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === "/") {
        fs.readFile("root.html", (err, data) => {
            if (err) {
                console.error(err);
                res.write("<h1>500 Internal Server Error</h1>");
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === "/hcm") {
        fs.readFile("hcm.html", (err, data) => {
            if (err) {
                console.error(err);
                res.write("<h1>500 Internal Server Error</h1>");
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === "/cantho") {
        fs.readFile("cantho.html", (err, data) => {
            if (err) {
                console.error(err);
                res.write("<h1>500 Internal Server Error</h1>");
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
});

server.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
