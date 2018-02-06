const http = require('http');
const fs = require('fs');
const url = require('url');



http.createServer( function(request, response){
  if (request.url === '/'){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile( './index.html', (err, data) =>{
      if(err) {
        throw err;
      }
      return response.end(data);
    });
  }
  else if (request.url.includes('/hello')) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    let query = url.parse(request.url, true).query;
    if (query.name != null) {
      response.end('Hello, ' + query.name);
    } else {
      response.end('Hello, World');
    }
  }
}).listen(3000);
