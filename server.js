const http = require('http');
const PORT = 1600;

const server = http.createServer((req, res) => {
    console.log(`[GAME REQUESTED]: ${req.url}`);

    // 1. Give Flash the security pass it needs to talk from GitHub to your computer
    if (req.url.includes('crossdomain.xml')) {
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(`<?xml version="1.0"?>
        <cross-domain-policy>
            <allow-access-from domain="*" to-ports="*" />
        </cross-domain-policy>`);
        return;
    }

    // 2. Give the game the dummy WSDL XML it is begging for so it stops crashing
    if (req.url.includes('Service.asmx')) {
        res.writeHead(200, {
            'Content-Type': 'text/xml',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(`<?xml version="1.0" encoding="utf-8"?>
        <wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" targetNamespace="http://tempuri.org/">
           <wsdl:portType name="ServiceSoap" />
           <wsdl:binding name="ServiceSoap" type="tns:ServiceSoap">
              <soap:binding transport="http://schemas.xmlsoap.org/soap/http" />
           </wsdl:binding>
           <wsdl:service name="Service">
              <wsdl:port name="ServiceSoap" binding="tns:ServiceSoap">
                 <soap:address location="http://localhost:1600/Webservice/Service.asmx" />
              </wsdl:port>
           </wsdl:service>
        </wsdl:definitions>`);
        return;
    }

    // Default catch-all
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    res.end('OK');
});

server.listen(PORT, () => {
    console.log(`Dummy server running on http://localhost:${PORT}`);
});