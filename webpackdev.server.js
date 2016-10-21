var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var proxy = require('proxy-middleware');
var url = require('url');

module.exports = function(app) {
    // app.use('/build', proxy(url.parse('http://localhost:3001/build')));

  var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: '/build/',
    stats: { colors: true }
  }).listen(3001, 'localhost', function() {
    console.log('socketio listen 3001')
  });
}
