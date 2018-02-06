const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');

const index = fs.readFileSync('./index.html');
const port = 5000;

const server = http.createServer((req, res) => {;
    const queryData = url.parse(req.url, true).query;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url.match('/hello')) {
        if (queryData.name) {
            res.end(`Hello, ${queryData.name}\n`);
        } else {
            res.end(`Hello, world\n`);
        } 
    } else if(req.url === '/data' && req.method === 'POST') {
        console.log('Method: POST, body: ');
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
        });
    } else {
        res.end(`${index}\n`);
    }
});

function PostCode(data) {
    const postOptions = {
        host: 'localhost',
        port: '5000',
        path: '/data',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data),
        }
    };

    const postReq = http.request(postOptions);
    postReq.write(data);
    postReq.end();
}

server.listen(port, 'localhost');

PostCode('text');

http.get({
    hostname: 'localhost',
    port: 5000,
    path: '/',
    agent: false 
  }, (res) => {
    res.on('data', (chunk) => {
        console.log(`Method: GET, body:\n ${chunk}`);
    });
});

http.get({
    hostname: 'localhost',
    port: 5000,
    path: '/hello',
    agent: false 
  }, (res) => {
    res.on('data', (chunk) => {
        console.log(`Method: GET, body:\n ${chunk}`);
    });
});

http.get({
    hostname: 'localhost',
    port: 5000,
    path: '/hello?name=Johh',
    agent: false
  }, (res) => {
    res.on('data', (chunk) => {
        console.log(`Method: GET, body:\n ${chunk}`);
    });
  });
