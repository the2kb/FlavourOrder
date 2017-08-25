var app_root = 'src';
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  app_root: app_root,
  entry: [
    'webpack-dev-server/client?http://localhost:8090',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ],
  },
  devServer: {
    contentBase: __dirname + '/public/',
      proxy: {
          '/api/': {
              target: 'http://127.0.0.1:23000/',
              secure: false
          }
      }
  },
  plugins: [
    new CleanWebpackPlugin(['main.css', 'bundle.js'], {
      root: __dirname + '/public',
      verbose: false,
      dry: false,
    }),
      new ExtractTextPlugin('main.css', {
          allChunks: true
      })
  ],
};
