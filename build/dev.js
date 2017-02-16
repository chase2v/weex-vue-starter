var webpack = require('webpack')
var devServer = require('webpack-dev-server')
var base = require('./base')
var webConfig = base('vue', true)
var weexConfig = base('weex', true)
const opn = require('opn')

const port = '8080'
const host = '127.0.0.1'

webConfig.entry = {
  app: [
    './build/weex-vue-render.js',
    './src/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client/?http://127.0.0.1:8080'
  ]
}
webConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

// weex 版跑在 playground，里不需要热替换
weexConfig.entry = {
  app: ['./src/app.js']
}

new devServer(webpack([webConfig, weexConfig]), {
  port: parseInt(port),
  host: host,
  hot: true,
  stats: { colors: true }
}).listen(port, host)
console.log('Project is running at http://' + host + ':' + port + '/')
opn('http://' + host + ':' + port + '/')
