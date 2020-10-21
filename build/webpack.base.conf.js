const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../index.jsx'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /.[tj]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
    },
  },
  plugins: [
    new ProgressBarPlugin({
      format: `  build :bar ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),
    new HTMLWebpackPlugin({
      title: 'Azir',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../dll/react-manifest.json'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
};
