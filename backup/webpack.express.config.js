var webpack = require('webpack');
var path = require('path');
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/main.js'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
        { 
            test: /\.scss$/, 
            include: path.resolve(__dirname, 'app'), 
            loader: 'style-loader!css-loader!sass-loader!postcss-loader' 
        },
        { 
            test: /\.js[x]?$/, 
            include: path.resolve(__dirname, 'app'), 
            exclude: /node_modules/, loader: 'babel-loader' 
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
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    /*
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    */
    new CopyWebpackPlugin([
      { from: './app/index.html' }
    ])
  ]
};
