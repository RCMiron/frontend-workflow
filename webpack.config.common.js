var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    home: './src/components-index/home.js',
    view1: './src/view1/view1-components/view1.js'
    //add entry points here
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?minimize'
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract('css-loader?minimize!sass-loader')
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new extractTextPlugin('styles/bootstrap.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['home'],
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['view1'],
      template: './src/view1/index.html',
      filename: 'view1/index.html'
    })
  ]
}
