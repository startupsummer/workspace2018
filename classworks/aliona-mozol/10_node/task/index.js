const http = require('http');
const fs = require('fs');
const url = require('url');
let htmlFileData = null;

fs.readFile('./index.html', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  htmlFileData = data;
});

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === '/') {
    response.write(htmlFileData);
  } else if (request.url.includes('/hello')) {
    let query = url.parse(request.url, true).query;
    let name = query.name;
    if (name != null) {
      response.write('Hello, ' + name);
    } else {
      response.write('Hello, World');
    }
  } else {
    response.write('Oops! No useful data here.');
  }
  response.end();
}).listen(3000);
