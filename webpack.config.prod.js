var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge.smart(commonConfig, {
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'scripts/bundles/[name]-bundle.js'
  },
  plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: false
      })
  ]
})
