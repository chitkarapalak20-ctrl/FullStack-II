const http = require('http');
const PORT = 3000
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { "content-type": 'text/html' })
        res.end("<h1>Home page</h1>")
    }
    if (req.url === '/student') {
        res.writeHead(200, { "content-type": 'application/json' })
        res.end(JSON.stringify(
            {
                name: "john",
                age: 10
            }
        ))
    }
});
server.listen(PORT, () => {
    console.log(`server is running  ${PORT}`)
})
