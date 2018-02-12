const http = require('http')
const url = require('url')
const fs = require('fs')
const queryString = require('query-string')

const port = 3000
const index_html = fs.readFileSync('./index.html')

const postHandler = (request, response) => {
  let body = ''

  request.on('data', data => {
      body += data
  })

  request.on('end', () => {
    console.log(body)
  })
}

const getHandler = (require, response) => {
  let pathname = url.parse(require.url).pathname;
  let query = queryString.parseUrl(require.url).query;
  let body = ''
  
  switch (pathname) {
    case '/':
      body = index_html
      break
    case '/hello':
      body = 'Hello, '
      if(query.name) {
        body += query.name
      } else {
        body += 'World'
      }
      break
  }
  response.end(body)
} 

const requestHandler = (request, response) => {
  console.log(request.url)

  switch(request.method) {
    case 'GET':
      getHandler(request, response)
      break

    case 'POST':
      postHandler(request, response)
      break
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('smth bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
