const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 1600;

app.use((req, res, next) => {
    console.log(`[GAME REQUESTED]: ${req.method} ${req.url}`);
    next();
});

// 1. Cross-Domain Policy
app.get('/crossdomain.xml', (req, res) => {
    res.type('text/xml');
    res.send(`<?xml version="1.0"?>
    <cross-domain-policy>
        <allow-access-from domain="*" to-ports="*" />
    </cross-domain-policy>`);
});

// 2. The AMF Gateway (Traffic Cop)
app.post('/Gateway.aspx', express.raw({ type: '*/*' }), (req, res) => {
    const method = req.query.method;
    
    if (!method) {
        console.log(`   -> [AMF] Unnamed Flash Remoting Call`);
        return res.status(200).send();
    }

    console.log(`   -> [AMF METHOD]: ${method}`);

    // Look for the script in the /services folder
    // E.g., looking for "GetAppSettings.js"
    const scriptName = method.split('.').pop(); // Extracts just the last part of the name
    const scriptPath = path.join(__dirname, 'services', `${scriptName}.js`);

    if (fs.existsSync(scriptPath)) {
        // If the script exists, require it and run it! (Like Roblox require())
        try {
            const handler = require(scriptPath);
            handler.execute(req, res);
        } catch (error) {
            console.error(`   -> [ERROR] Failed to run ${scriptName}.js:`, error);
            res.status(500).send();
        }
    } else {
        // If we haven't made the script yet, just ignore it and don't crash
        console.log(`   -> [MISSING SCRIPT]: Create services/${scriptName}.js to handle this!`);
        res.status(200).send();
    }
});

// 3. User Web Services (SOAP / XML)
app.all(/^\/.*WebService\/User\/UserService\.asmx/i, (req, res) => {
    console.log(`   -> [SOAP SERVICE]: UserService`);
    res.type('text/xml');
    res.send(`<?xml version="1.0" encoding="utf-8"?>
    <wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" targetNamespace="http://tempuri.org/">
        <wsdl:portType name="UserServiceSoap" />
    </wsdl:definitions>`);
});

// 4. Catch-All
app.use((req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 MSP Modular Server running on port ${PORT}`);
    console.log(`=========================================`);
});