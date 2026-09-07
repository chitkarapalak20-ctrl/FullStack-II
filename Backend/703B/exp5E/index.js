const http = require('http')
const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === "GET") {
        res.end("root route")
    }

    if (req.url === "/student", req.method === "GET") {
        res.end(JSON.stringify({
            name: "john",
            age: 20
        }))
    }

})
server.listen(PORT, () => {

    console.log(`Server is running at ${PORT}`)
})


