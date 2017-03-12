var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: '/dist',
    publicPath: '/',
    filename: '[name]-bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    contentBase: 'path.join(__dirname, "dist")',
    compress: true
  }
})
