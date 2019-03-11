/* eslint-disable no-console */

const fs = require('fs-extra');
const path = require('path');

const getProcessedFlag = require('./lib/getProcessedFlag');

const sourceAssetsPath = path.join(__dirname, '../../node_modules/flag-svg-collection/flags/1x1');
const destAssetsPath = path.join(__dirname, '../../site/assets/flags');
const destMapPath = path.join(__dirname, '../../packages/axiom-materials/src');

const assetsBaseUrl = 'https://axiom.brandwatch.com/assets/flags';

function createJsMap(items) {
  const map = items.reduce((memo, item) => {
    return Object.assign(memo, {
      [item.id]: {
        src: `${assetsBaseUrl}/${item.id}.svg`,
        color: item.color,
      },
    });
  }, {});
  return fs.writeFile(path.join(destMapPath, 'flags.json'), JSON.stringify(map, null, 4));
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
    fs.mkdirp(destMapPath),
  ])
    .then(() => fs.readdir(sourceAssetsPath))
    .then((fileNames) => Promise.all(fileNames.map(processFlag)))
    .then(createJsMap);
}

processAllFlags()
  .then(() => console.log('All flags processed!'))
  .catch((error) => console.error(error));
