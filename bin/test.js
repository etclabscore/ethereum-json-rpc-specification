const { validateOpenRPCDocument } = require("@open-rpc/schema-utils-js");
const { readFileSync } = require("fs");

let openrpcDocument = "";
try {
  openrpcDocument = readFileSync(process.cwd() + "/openrpc.json", "utf8");
} catch(e) {
  console.error(e)
  fail("Could not find open rpc document");
}

let openrpcDocumentObject;
try {
  openrpcDocumentObject = JSON.parse(openrpcDocument);
} catch (e) {
  fail("Failed to parse OpenRPC document - invalid JSON");
}


const isValid = validateOpenRPCDocument(openrpcDocumentObject);

if (isValid === true) { process.exit(0); }

fail(isValid);


function fail(msg) {
  console.error(msg);
  process.exit(1);
}
