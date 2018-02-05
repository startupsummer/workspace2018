var
    http = require('http'),
    path = require('path'),
    url = require('url');
	fs = require('fs');

function requestHandler(req, res) {
    var content = '';
    var queryData = url.parse(req.url, true).query;
    var pathname = url.parse(req.url).pathname;
    console.log(queryData);
    console.log(pathname);

    if (pathname === '/') {

        let cont;
        fs.readFile('./test.html', 'utf8', function(err, contents) {
            if (err) {
                throw err;
            }
            res.end(contents);
        });

    } else {
        if (pathname === '/Hello') {
            if (queryData.name) {
                res.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                res.end('Hello ' + queryData.name + '\n');
            } else {
                res.write("Hello, World");
                res.end();
            }
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end('<h1>Sorry, the page you are looking for cannot be found.</h1>');
        }
    }
}


http.createServer(requestHandler).listen(1212);