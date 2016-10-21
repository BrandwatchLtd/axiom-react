const path = require('path');

module.exports = function isCalledDirectly(dirName, scriptName) {
  return path.basename(process.argv[1]) === scriptName && path.dirname(process.argv[1]) === dirName;
};
