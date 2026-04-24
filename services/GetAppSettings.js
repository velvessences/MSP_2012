// services/GetAppSettings.js
//
// FIX: Flash's AppSettings.initialize() AMF call returns either:
//   (a) An AS3 Dictionary / plain Object  →  key:value pairs
//   (b) An Array of {Name, Value} typed objects
//
// The timeout/onFail means Flash got a response but couldn't parse it
// into whatever AppSettings.initialize() expects.
//
// We provide BOTH shapes so you can switch between them easily.
// Start with MODE = "object" (most common for MSP-style servers).

const appSettings = require("../appSettings.js");

// ─── CHOOSE YOUR MODE ────────────────────────────────────────────────────────
// "object" → returns a plain AS3 Object / Dictionary  { key: value, ... }
// "array"  → returns Array of { Name, Value, Key }  objects
// Try "object" first. If it still fails, switch to "array".
const MODE = "object";
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {
    execute: function(req) {
        console.log("      => [AMF] Supplying AppSettings | mode:", MODE);

        if (MODE === "object") {
            // Plain JS object → libamf encodes as AMF3 anonymous object (0x0A)
            // Flash reads this as a dynamic Object / Dictionary: obj[key] = value
            const result = {};
            for (const key in appSettings) {
                result[key] = appSettings[key];
            }
            return result;
        }

        if (MODE === "array") {
            // Array of {Name, Value, Key} — some MSP versions iterate this list
            const arr = [];
            for (const key in appSettings) {
                arr.push({ Name: key, Value: appSettings[key], Key: key });
            }
            return arr;
        }
    }
};