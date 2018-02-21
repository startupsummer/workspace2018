const http = require('http');
const fs = require('fs');
const parse = require('url-parse');

const index = fs.readFileSync('./index.html', 'utf8');

http.createServer(function (request, response) {
  url = parse(request.url, true);
  switch (url.href) {
    case '/':
      response.end(index);
    case '/hello':
      response.end('Hello, world!');
    default:
      response.end(`Hello, ${url.query.name}!`);
  }
}).listen(5000);
