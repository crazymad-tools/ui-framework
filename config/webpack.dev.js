const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');


const base_path = path.resolve(__dirname, '..');
const entry_path = path.resolve(base_path, 'web/index.tsx');
const output_path = path.resolve(base_path, 'static');

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

module.exports = devConfig;
