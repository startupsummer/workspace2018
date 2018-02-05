const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./index.html', 'utf8');

http.createServer(function(request, response) {
    if (request.url === '/') {
      response.end(index);
    } else if( request.url.includes('/hello')) {
      const name = request.url.replace('/hello?name=', '');
      if (name === '/hello'){
        response.end('Hello, world!');
      }else response.end(`Hello, ${name}!`);
    }
}).listen(5000);