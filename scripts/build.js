const webpack = require('webpack');
const config = require('../config/webpack.build');
const { program } = require('commander');

program.version(require('../package.json').version);
program
  .option('-m, --mode <string>', 'output extra debugging')

program.on('--help', () => {
  process.exit(0);
})

program.parse(process.argv);

if (program.mode && program.mode === 'demo') {
  console.log('demo');
} else if (!program.mode || program.mode === 'lib') {
  console.log('lib');
}

const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  }
});