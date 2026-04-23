// services/GetAppSetting.js
const { buildXML } = require("../Utils/XML.js");
const appSettings = require("../appSettings.js");

module.exports = {
    execute: function(req, res) {
        // In a real SOAP request, the key is hidden inside the XML body.
        // We will need to parse req.body later, but for now we can send a default back
        // to stop the game from crashing if it hits the SOAP route.
        
        // Let's pretend the game asked for ServerType
        const requestedKey = "ServerType"; 
        const value = appSettings[requestedKey] || "false";

        console.log(`      => [SOAP] Supplying AppSetting: ${requestedKey} = ${value}`);
        
        const xmlResponse = buildXML("GetAppSetting", value);
        
        res.type('text/xml');
        res.status(200).send(xmlResponse);
    }
};