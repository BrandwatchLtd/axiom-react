const Alias = require('./utils/webpack-alias-plugin');
var path = require('path');

module.exports = {
  server: {
    port: 4000,
    hostname: 'localhost',
  },
  output: {
    folderName: 'lib',
    js: 'axiom.js',
  },
  webpack: {
    aliases: [
      new Alias(/^bw-axiom/, (resolve) => resolve.replace(/^bw-axiom(.*)/, path.resolve(__dirname, 'docs') + '$1')),
    ],
  },
};
