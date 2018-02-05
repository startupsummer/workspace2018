const http = require('http');
const app = require('./app');
const port = 4040;

http.createServer(app.handleRequest).listen(port);
