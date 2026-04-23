const http = require('http');
const PORT = 1600; 

const server = http.createServer((req, res) => {
    console.log(`[GAME REQUESTED]: ${req.url}`);

    // If Flash asks for security permission, give it a thumbs up
    if (req.url.includes('crossdomain.xml')) {
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(`<?xml version="1.0"?>
        <cross-domain-policy>
            <allow-access-from domain="*" to-ports="*" />
        </cross-domain-policy>`);
        return;
    }

    // Default response
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    res.end('Server is alive!');
});

server.listen(PORT, () => {
    console.log(`Dummy server is listening on http://localhost:${PORT}`);
});