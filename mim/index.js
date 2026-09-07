const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {

    let filePath = path.join(
        __dirname,
        'exp3/dist',
        req.url === '/' ? 'index.html' : req.url
    );

    fs.readFile(filePath, (err, data) => {

        // If file doesn't exist, serve index.html
        if (err) {
            filePath = path.join(__dirname, 'exp3/dist', 'index.html');

            fs.readFile(filePath, (err, data) => {

                if (err) {
                    res.writeHead(500);
                    res.end('Internal Server Error');
                    return;
                }

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                res.end(data);
            });

            return;
        }

        const ext = path.extname(filePath);

        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml'
        };

        res.writeHead(200, {
            'Content-Type': mimeTypes[ext] || 'text/plain'
        });

        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});