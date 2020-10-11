const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const config = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
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
              importLoaders: 2,
              modules: {
                auto: true,
                localIdentName: '[hash:base64]',
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
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
module.exports = config;
