const { merge } = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const config = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    bonjour: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader', options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
module.exports = config;
