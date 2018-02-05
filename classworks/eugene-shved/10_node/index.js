const http = require('http');
      fs = require('fs');

const server = http.createServer(function(request, response) {
  const url = request.url;
  const a = fs.readFile('./hello_world.html', function(err, content) { return content });

  if (url === '/1') {
    fs.readFile('./hello_world.html', function(err, content) {
      response.end(content);
    })
  }

  if (url === '/') {
    fs.readFile('./index.html', function(err, content) {
      response.end(content);
    })
  }

  if (url.includes("/hello?name=")) {
    let name = url.split('=')[1];
    response.end('Hello ' + name);
  }

  if (url === '/data') {
    fs.readFile('./data.html', function(err, content) {
      response.end(content);
    })
  }

  if (url === '/data' && request.method === 'POST') {
    let body = [];
    request.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        let additional_spaces = 5;
        let index_start  = body.indexOf("say") + additional_spaces;
        let index_end  = body.lastIndexOf("------WebKitFormBoundary");
        let output_string =  body.slice(index_start, index_end);
        console.log(output_string.trim());
    });
  }
});

server.listen(3000);
