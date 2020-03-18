const webpack = require('webpack');
const config = require('../config/webpack.build');

const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  }
});