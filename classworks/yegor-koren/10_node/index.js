const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

function renderHTML(path, response) {
  fs.readFile(path, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found');
    } else {
      response.write(data);
    }
     response.end();
  });
}

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    const path = url.parse(request.url).pathname;
    const name = url.parse(request.url).search;

    switch (path) {
      case '/':
        renderHTML('./index.html', response);
        break;
      case '/hello':
        if (name) {
          response.end('Hello, ' + name.slice(6));
        } else {
          response.end('Hello, World');
        }
        break;
      default:
        response.writeHead(404);
        response.end('Route not defined');
    }
}).listen(port);
