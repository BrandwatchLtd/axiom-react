const path = require('path');
const nodeSass = require('node-sass');
const Alias = require('./webpack-alias-plugin');

function formatKey(key) {
  return key.startsWith('#') ? key : key
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])(\d+)/g, '$1-$2')
    .toLowerCase();
}

function formatValue(value) {
  if (value === null || value === undefined) {
    throw new Error(`Invalid Sass variable: ${value}`);
  }

  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return `(${value.map((arrayValue) => {
        return `${formatValue(arrayValue)}`;
      })})`;
    }

    return `(${Object.keys(value).map((key) => {
      return `${formatKey(key)}:${formatValue(value[key])}`;
    })})`;
  }

  return JSON.stringify(value).replace(/"/g, '');
}

function clearCachedFiles(file) {
  if (file) {
    if (Array.isArray(file.children)) {
      file.children.forEach(clearCachedFiles);
    }

    delete require.cache[file.id];
  }
}

module.exports = function createSassVariableImporter(fileTest, aliases = []) {
  return function variableInjector(url, prev) {
    if (!fileTest.test(url)) {
      return nodeSass.NULL;
    }

    let variableSass = '';
    let importPath;
    const context = prev === 'stdin'
      ? this.options.includePaths
      : path.dirname(path.normalize(prev));

    if (url[0] === '~') {
      url = url.slice(1);
      aliases.some((alias) => {
        if (alias instanceof Alias && alias.isMatch(url)) {
          return importPath = alias.replace(url);
        }
      });
    } else {
      importPath = path.resolve(context, url);
    }

    if (require.cache[importPath]) {
      clearCachedFiles(require.cache[importPath]);
    }

    try {
      const jsVariables = require(importPath);
      variableSass = Object.keys(jsVariables).reduce((acc, jsKey) => {
        const sassKey = `$${formatKey(jsKey)}`;
        const sassValue = formatValue(jsVariables[jsKey]);

        return `${acc}\n${sassKey}: ${sassValue};`
          // TODO: Weird Sass issue with having only one element.
          .replace(/\)\)/g, '),)');
      }, '');
    } catch (e) {
      /* eslint-disable no-console */
      console.error(e);
    }

    return {
      contents: variableSass,
    };
  };
};
