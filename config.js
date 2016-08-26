const path = require('path');

const outputFolderName = 'lib';

module.exports = {
  server: {
    port: 4000,
    hostname: 'localhost',
    filename: 'server.js',
  },
  output: {
    folderName: path.resolve(__dirname, outputFolderName),
    js: 'axiom.js',
    css: 'axiom.css',
  },
  webpack: {
    devServerHostname: 'localhost',
    devServerPort: 8080,
  },
};
