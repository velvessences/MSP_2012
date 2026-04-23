// Utils/XML.js
const xml2js = require("xml2js");

exports.buildXML = (action, object, ticket = "null") => {
    let obj = {
        "soap:Envelope": {
            $: {
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                "xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/"
            },
            "soap:Body": {}
        }
    };

    if (ticket !== "null") {
        obj["soap:Envelope"]["soap:Header"] = {
            TicketHeader: {
                $: { xmlns: "http://moviestarplanet.com/" },
                Ticket: ticket
            }
        };
    }

    obj["soap:Envelope"]["soap:Body"][`${action}Response`] = {
        $: { xmlns: "http://moviestarplanet.com/" }
    };
    obj["soap:Envelope"]["soap:Body"][`${action}Response`][`${action}Result`] = object;

    return new xml2js.Builder().buildObject(obj);
};