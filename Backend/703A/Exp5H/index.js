const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
const server = http.createServer((req, res) => {
    const mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif"
    };

})
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})