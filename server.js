const express = require('express');
const path = require('path');
const fs = require('fs');
const libamf = require('libamf');
const nodeamf = require('@jadbalout/nodeamf'); // THE CORRECT PACKAGE
const app = express();
const PORT = 1600;

app.use((req, res, next) => {
    // Allow the specific origin of your frontend
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    // Allow the methods Ruffle/Flash uses
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // Allow the headers Ruffle sends (like Content-Type)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-requested-with');
    // Allow credentials if needed
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Handle the Preflight request
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use((req, res, next) => {
    console.log(`[GAME REQUESTED]: ${req.method} ${req.url}`);
    next();
});

// 1. Cross-Domain Policy
app.get('/crossdomain.xml', (req, res) => {
    res.type('text/xml');
    res.send(`<?xml version="1.0"?><cross-domain-policy><allow-access-from domain="*" to-ports="*" /></cross-domain-policy>`);
});

// --- CUSTOM AMF PACKET BUILDER ---
// Wraps your AMF3 data in an AMF0 packet so the Flash Player's NetConnection accepts it
function buildAMFPacket(responseId, amf3Data) {
    const targetUri = responseId + '/onResult';
    const responseNull = 'null';

    const header = Buffer.alloc(6);
    header.writeUInt16BE(0, 0); // AMF0 Version
    header.writeUInt16BE(0, 2); // 0 Headers
    header.writeUInt16BE(1, 4); // 1 Message

    const tBuf = Buffer.alloc(2 + Buffer.byteLength(targetUri));
    tBuf.writeUInt16BE(Buffer.byteLength(targetUri), 0);
    tBuf.write(targetUri, 2);

    const rBuf = Buffer.alloc(2 + Buffer.byteLength(responseNull));
    rBuf.writeUInt16BE(Buffer.byteLength(responseNull), 0);
    rBuf.write(responseNull, 2);

    const lBuf = Buffer.alloc(4);
    lBuf.writeUInt32BE(amf3Data.length + 1, 0); // +1 for the AMF3 marker

    const marker = Buffer.alloc(1);
    marker.writeUInt8(0x11, 0); // 0x11 tells Flash: "AMF3 Data follows!"

    return Buffer.concat([header, tBuf, rBuf, lBuf, marker, amf3Data]);
}

// --- THE AMF GATEWAY ---
app.post('/Gateway.aspx', express.raw({ type: '*/*' }), (req, res) => {
    const method = req.query.method;
    if (!method) return res.status(200).send();

    const rawString = req.body.toString('utf8');
    const match = rawString.match(/\/[0-9]+/);
    const responseId = match ? match[0] : '/1';

    const scriptName = method.split('.').pop(); 
    const scriptPath = path.join(__dirname, 'services', `${scriptName}.js`);

    if (fs.existsSync(scriptPath)) {
        try {
            const handler = require(scriptPath);
            const responseData = handler.execute(req); 
            
            // 1. Encode using libamf (Syntax may vary slightly depending on your exact libamf version)
            // It might be libamf.encode(), libamf.serialize(), etc.
            const amf3Data = libamf.serialize(responseData, libamf.AMF3); 
            
            // 2. Wrap it into the AMF0 Packet
            const finalPacket = buildAMFPacket(responseId, amf3Data);

            res.setHeader('Content-Type', 'application/x-amf');
            res.status(200).send(finalPacket);
        } catch (error) {
            console.error(`   -> [ERROR] Failed to run ${scriptName}.js:`, error);
            res.status(500).send();
        }
    } else {
        res.status(200).send();
    }
});

// --- SOAP / XML ---
app.all(/^\/.*WebService\/User\/UserService\.asmx/i, (req, res) => {
    console.log(`   -> [SOAP SERVICE]: UserService`);
    res.type('text/xml');
    res.send(`<?xml version="1.0" encoding="utf-8"?><wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" targetNamespace="http://tempuri.org/"><wsdl:portType name="UserServiceSoap" /></wsdl:definitions>`);
});

// --- CATCH-ALL ---
app.use((req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 MSP AMF Gateway running on port ${PORT}`);
    console.log(`=========================================`);
});