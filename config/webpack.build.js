const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.base');

const base_path = path.resolve(__dirname, '..');
const entry_path = path.resolve(__dirname, '../packages/index.ts');
const output_path = path.resolve(__dirname, '../dist');

module.exports = baseConfig;

// module.exports = {
//   mode: 'production',
//   entry: entry_path,
//   output: {
//     filename: 'ui.js',
//     path: output_path
//   },
//   module: {
//     rules: [{
//       test: /\.tsx?$/,
//       use: 'ts-loader',
//       exclude: /node_modules/
//     }, {
//       test: /\.scss?$/,
//       use: [
//         MiniCssExtractPlugin.loader,
//         {
//           loader: 'css-loader'
//         },
//         {
//           loader: 'sass-loader'
//         }
//       ],
//     }]
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js']
//   },
//   plugins: [new MiniCssExtractPlugin({
//     filename: 'style/ui.css'
//   })]
// }