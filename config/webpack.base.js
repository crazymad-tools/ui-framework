const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base_path = path.resolve(__dirname, '..');
const entry_path = path.resolve(base_path, 'packages/index.ts');
const output_path = path.resolve(base_path, 'dist');

module.exports = {
  mode: 'production',
  entry: entry_path,
  output: {
    filename: 'ui.js',
    path: output_path
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss?$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ],
    }, {
      test: /\.svg/,
      loader: 'file-loader',
      options: {
        outputPath: 'img/svg'
      }
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style/ui.css'
  })]
}