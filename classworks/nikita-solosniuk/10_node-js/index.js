const http = require('http');
const fs = require('fs');
const url = require ('url');
const port = 3000;
const index = fs.readFileSync('./index.html');

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url, true);

  if (request.method === 'POST') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });
    response.end();
  }
  else {
    if (parsedUrl.pathname === '/') {
      response.end(index);
    }

    else if (parsedUrl.pathname === '/hello') {
      if (parsedUrl.query.name)
        response.end(`Hello, ${parsedUrl.query.name}`);
      else response.end(`Hello, World`);
    }

    else if (parsedUrl.pathname === '/data') {
      response.end();
    }

    else response.end('404: Not Found!');
  }
};

const server = http.createServer(requestHandler);

server.listen(port,(err) => {
  if (err) {
    return console.log('dis is kind of weird ', err)
  }
  console.log(`server is listening of ${port}`);
});
