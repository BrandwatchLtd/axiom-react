const { copy } = require('fs-extra');
const glob = require('glob');
const config = require('../config');

function prepublishSass() {
  glob.sync(`${config.paths.source}/**/*.scss`).forEach((file) => {
    copy(file, `${config.paths.output}${file.split(config.paths.source)[1]}`);
  });
}

prepublishSass();
