const path = require('path');
const fs = require('fs');
const glob = require('glob');
const postcss = require('postcss');
const browsers = require('../browsers');

function isCustomProperty(node) {
  return node.type === 'decl' && /^--/.test(node.prop);
}

function extract(files) {
  return postcss()
    .process(files.map((file) => fs.readFileSync(file, 'utf8')).join('\n'))
    .then((result) => {
      let vars = ':root {\n';
      result.root.walk((node) => {
        if (isCustomProperty(node)) {
          vars += `  ${node.prop}: ${node.value};\n`;
        }
      });
      return vars + '}';
    });
}

function resolve(variables) {
  return postcss([
    require('postcss-cssnext')({
      browsers,
      features: {
        customProperties: {
          preserve: 'computed',
          appendVariables: true,
        },
      },
    }),
  ]).process(variables);
}

function convert(result) {
  const variables = {};
  result.root.walk((node) => node.value && (variables[node.prop] = node.value));
  return variables;
}

function write(filename) {
  return (variables) => {
    const materialsFolder = path.resolve(__dirname, '../lib/materials');

    if (!fs.existsSync(materialsFolder)){
      fs.mkdirSync(materialsFolder);
    }

    fs.writeFile(path.resolve(materialsFolder, filename), `

module.exports = ${JSON.stringify(variables, null, 2)}

    `, (err) => {
      if (err) throw err;
    });
  };
}

extract([path.resolve(__dirname, '../src/materials/theme-day.css')])
  .then(resolve)
  .then(convert)
  .then(write('cssvars-theme-day.js'));

extract([path.resolve(__dirname, '../src/materials/theme-night.css')])
  .then(resolve)
  .then(convert)
  .then(write('cssvars-theme-night.js'));

glob(path.resolve(__dirname, '../src/**/*.css'), (err, files) => {
  if (err) throw err;

  extract(files)
    .then(resolve)
    .then(convert)
    .then(write('cssvars-all.js'));
});
