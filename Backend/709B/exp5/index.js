const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>hi ragav detain ,reply form server</h1>")
    }
    if (req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            name: "john",
            age: 20
        }))
    }
});
server.listen(3000, () => {
    console.log("server is running on port 3000")
})