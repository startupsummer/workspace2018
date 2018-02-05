const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

const port = 4040;

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

function requestPost(request, response) {
    if (request.method == 'POST') {
        let body = '';

        request.on('data', function (data) {
            body += data;
            if (body.length > 1 * Math.pow(10, 6))
                request.connection.destroy();
        });

        request.on('end', function () {
            let post = qs.parse(body);
            console.log(post.line);
        });

        // console.log("1111111");
        // console.log(post.line);
    }
}

http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});
    requestPost(request, response);

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
      case '/data':
        renderHTML('./data.html', response);
        break;
      default:
        response.writeHead(404);
        response.end('Route not defined');
    }
}).listen(port);
