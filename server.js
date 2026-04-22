const express = require('express');
const app = express();
const PORT = 8080;

// 1. Host everything in the "public" folder (assets + crossdomain.xml)
app.use(express.static('public'));

// 2. Allow the server to read the raw AMF data the game will send
app.use(express.raw({ type: '*/*', limit: '50mb' }));

// 3. THE INTERCEPTOR: Catch all API traffic and print it
// (Updated for Express 5 compatibility!)
app.use((req, res) => {
    console.log('\n========================================');
    console.log(`🔥 INCOMING REQUEST FROM GAME!`);
    console.log(`URL Requested:  ${req.url}`);
    console.log(`Method Used:    ${req.method}`);
    
    if (req.body && req.body.length > 0) {
        console.log(`Data Payload:   ${req.body.length} bytes received.`);
    }
    console.log('========================================\n');

    // Send a blank OK so the game doesn't crash
    res.status(200).send("OK");
});

// 4. Start the server
app.listen(PORT, () => {
    console.log(`🚀 MSP Custom Server is LIVE!`);
    console.log(`📡 Listening on http://localhost:${PORT}`);
    console.log(`Waiting for the game to connect...\n`);
});