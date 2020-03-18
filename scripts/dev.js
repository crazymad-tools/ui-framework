const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const path = require('path');
const devConfig = require('../config/webpack.dev')
const PORT = 9000;
const config = merge(devConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../static'),
    compress: true,
    port: PORT
  }
})

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, {
  // publicPath: config.output.publicPath,
  contentBase: path.resolve(__dirname, '../static'),
  compress: true,
  port: PORT
});

devServer.listen(PORT, process.env.HOST || '0.0.0.0', err => {
  if (err) {
    console.log(err);
  }
})