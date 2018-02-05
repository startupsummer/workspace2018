const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./index.html', 'utf8');

http.createServer(function(request, response) {
  if (request.method === 'POST') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });
  } else {
    if (request.url === '/') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(index);
    } else if( request.url === '/hello' ) {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write('Hello, world!');
      response.end();
    } else if( request.url === '/hello?name=John' ) {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write('Hello, John!');
      response.end();
    }
  }
}).listen(3000);
