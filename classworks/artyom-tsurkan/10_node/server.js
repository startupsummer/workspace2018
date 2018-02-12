const http = require('http');
const url = require('url');
const fs = require('fs');

const indexHtml = fs.readFileSync('./index.html');
const dataHtml = fs.readFileSync('./data.html');

const getMiddleware = (req, res) => {
  const path = url.parse(req.url).pathname;
  const search = url.parse(req.url).search;
  let body = '';

  switch (path) {
    case '/':
      body = indexHtml;
      break;

    case '/hello':
      if (search) {
        body = 'Hello, ' + search.split('=')[1];
      } else {
        body = 'Hello, World';
      }
      break;

    case '/data':
      body = dataHtml;
      break;

    default:
      body = 'Undefined route';
  }

  res.end(body);
};

const postMiddleware = (req, res) => {
  let body = '';

  req.on('data', data => {
    body += data;
  });

  req.on('end', () => {
    console.log(JSON.parse(body));
  });

  res.end();
};

const middleware = (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'get':
      getMiddleware(req, res);
      break;

    case 'post':
      postMiddleware(req, res);
      break;
  }
};

http.createServer(middleware).listen(3000);
