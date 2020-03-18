const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const base_path = path.resolve(__dirname, '..');
const entry_path = path.resolve(__dirname, '../web/index.tsx');
const output_path = path.resolve(__dirname, '../static');

const devConfig = merge(baseConfig, {
  mode: 'development',
  entry: entry_path,
  output: {
    filename: 'ui.js',
    path: output_path
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'ui',
    template: path.resolve(base_path, 'index.html')
  })]
})

console.log(devConfig);

module.exports = devConfig;
