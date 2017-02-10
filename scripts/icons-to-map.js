const path = require('path');
const fs = require('fs');
const jsdom = require('jsdom');

const stripAttributes = [
  'id',
];

function getIconFile(filename) {
  return fs.readFileSync(
    path.resolve(__dirname, `../src/components/icon/svgs/${filename}`),
    'utf8'
  );
}

function getIcon(filename) {
  const document = jsdom.jsdom(getIconFile(filename));
  const icon = document.querySelector('#path-1');

  stripAttributes.forEach((attr) => {
    icon.removeAttribute(attr);
  });

  return icon.outerHTML;
}

const iconMap = fs.readdirSync(path.resolve(__dirname, '../src/components/icon/svgs'))
  .filter((filename) => /\.svg$/.test(filename))
  .reduce((map, filename) => Object.assign({}, map, {
    [filename.replace(/\.svg$/, '')]: getIcon(filename),
  }), {});

/* eslint-disable no-console */
console.log(`const ICON_NAME_MAP = ${
  JSON.stringify(iconMap, null, 2)
    .replace(/\\"/g, '"')
    .replace(/"</g, '<')
    .replace(/>"/g, '>')
};`);

console.log(`PropTypes.oneOf(${
  JSON.stringify(Object.keys(iconMap), null, 2)
}),`);
/* eslint-enable no-console */
