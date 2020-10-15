const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

const config = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    bonjour: true,
    open: true,
    // quiet: true,
    clientLogLevel: 'silent',
    hot: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
module.exports = config;
