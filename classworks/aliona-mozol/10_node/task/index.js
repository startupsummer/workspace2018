const http = require('http');
const fs = require('fs');
const url = require('url');
const htmlFileData = fs.readFileSync('./index.html');

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === '/') {
    response.end(htmlFileData);
  } else if (request.url.includes('/hello?name=')) {
    let query = url.parse(request.url, true).query;
    let name = query.name;
    if (name != null) {
      response.end('Hello, ' + name);
    }
  } else if (request.url === '/hello') {
    response.end('Hello, World');
  } else if (request.url === '/data' && request.method === 'POST') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });
    response.end();
  } else {
    response.end('Oops! No useful information here.');
  }
}).listen(3000);
