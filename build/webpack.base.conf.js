const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../index.jsx'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: DIST_PATH,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({ title: 'Azir', template: path.resolve(__dirname, '../public/index.html') }),
    new webpack.DllReferencePlugin({
      manifest: require('../dll/react-manifest.json'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
};
