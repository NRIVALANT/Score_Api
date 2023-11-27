//Server
const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./App')

const server = http.createServer(app);
server.listen(port);

console.log("Server created");
console.log("Listen on port" + port + "!");