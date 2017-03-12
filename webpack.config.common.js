var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        exclude: /(app-styles)/,
        loader: 'style-loader|css-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
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
