let http = require('http');
let fs = require('fs');
let fetch = require('fetch');
let bodyParser = require('body-parser');
var formidable = require("formidable");
var util = require('util');

http.createServer(function(request,response) {
  if(request.url=='/') {
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream('./index.html').pipe(response);
  }else if(/hello.+|hello/.test(request.url)) {
    let data = request.url.match(/=.+/);
    if(data == null) {
      response.write('Hello, World');
    }else {
      response.write(request.url.match(/=.+/)[0].substr(1,));
    }
    response.end();
  }else if(/data/.test(request.url)) {
    function processAllFieldsOfTheForm(req, res) {
      var form = new formidable.IncomingForm();
      form.parse(request, function (err, fields, files) {
        response.writeHead(200, {
            'content-type': 'text/html'
        });
        response.write('received the data:\n\n');
        response.end(util.inspect({
            fields: fields,
            files: files
        }));
        console.log(util.inspect({
            fields: fields
        }));
    });
}
    if (request.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(request,response);
    }

  }

}).listen(8080);
