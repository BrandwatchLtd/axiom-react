/* eslint-disable no-console */

const fs = require('fs-extra');
const path = require('path');

const getProcessedFlag = require('./lib/getProcessedFlag');

const sourceAssetsPath = path.join(__dirname, '../../node_modules/flag-svg-collection/flags/1x1');
const destAssetsPath = path.join(__dirname, '../../site/assets/flags');
const destMapPath = path.join(__dirname, '../../packages/axiom-materials');

function createJsMap(items) {
  const map = items.reduce((memo, item) => {
    return Object.assign(memo, {
      [item.id]: {
        src: `flags/${item.id}.svg`,
        color: item.color,
      },
    });
  }, {});
  return Promise.all([
    fs.writeFile(path.join(destMapPath, 'src', 'flags.json'), JSON.stringify(map)),
    fs.writeFile(path.join(destMapPath, 'dist', 'flags.json'), JSON.stringify(map)),
  ]);
}

function processFlag(fileName) {
  return fs
    .readFile(path.join(sourceAssetsPath, fileName))
    .then(getProcessedFlag)
    .then((result) => {
      return fs
        .writeFile(path.join(destAssetsPath, fileName), result.svg)
        .then(() => result);
    })
    .then((result) => {
      return {
        id: fileName.split('.')[0],
        color: result.color,
      };
    });
}

function processAllFlags() {
  return Promise.all([
    fs.mkdirp(destAssetsPath),
    fs.mkdirp(path.join(destMapPath, 'src')),
    fs.mkdirp(path.join(destMapPath, 'dist')),
  ])
    .then(() => fs.readdir(sourceAssetsPath))
    .then((fileNames) => Promise.all(fileNames.map(processFlag)))
    .then(createJsMap);
}

processAllFlags()
  .then(() => console.log('All flags processed!'))
  .catch((error) => console.error(error));
