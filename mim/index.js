const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;


const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'exp3/dist', req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, data) => {

        // If file doesn't exist, serve React index.html
        if (err) {


            fs.readFile(filePath, (err, data) => {

                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    res.end('Internal Server Error');
                    return;
                }

            });

            return;
        }

        const ext = path.extname(filePath);

        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon'
        };

        const contentType = mimeTypes[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType
        });

        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});