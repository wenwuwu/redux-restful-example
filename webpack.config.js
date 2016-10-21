var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 3000
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  debug: true,
  devtool: "source-map",
  module: {
    loaders:[
        /*
        { 
            test: /\.json$/, 
            include: path.resolve(__dirname, 'app'), 
            loader: 'json'
        },
        */
        { 
            test: /\.scss$/, 
            include: path.resolve(__dirname, 'app'), 
            loader: 'style-loader!css-loader!sass-loader!postcss-loader' 
        },
        { 
            test: /\.js[x]?$/, 
            include: path.resolve(__dirname, 'app'), 
            exclude: /node_modules/, 
            loader: 'babel-loader'
            // loaders: ['react-hot-loader', 'babel-loader']
        }
    ]
  },
  postcss: [ autoprefixer({ browsers: [
    "Android 2.3",
    "Android >= 4",
    "Chrome >= 20",
    "Firefox >= 24",
    "Explorer >= 10",
    "iOS >= 7",
    "Opera >= 12",
    "Safari >= 6"
  ] }) ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ]
};
