var path = require('path');
var nodeSass = require('node-sass');
var decamelize = require('decamelize');
var Alias = require('./webpack-alias-plugin');

/**
 *
 */

function formatKey(key) {
  const decamelized = decamelize(key, '-');

  if (decamelized.includes('-')) {
    return decamelized;
  }

  return key;
}

function formatValue(value) {
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return `(${value.map((arrayValue) => {
        return `${formatValue(arrayValue)}`
      })})`;
    }

    return `(${Object.keys(value).map((key) => {
      return `${formatKey(key)}:${formatValue(value[key])}`;
    })})`
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

module.exports = function createSassVariableImporter(fileTest, aliases) {
  if (!aliases) {
    aliases = [];
  }
  return function variableInjector(url, prev) {
    if (!fileTest.test(url)) {
      return nodeSass.NULL;
    }

    var variableSass = '';
    var importPath;
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
      clearCachedFiles(require.cache[importPath])
    }

    try {
      const jsVariables = require(importPath);
      variableSass = Object.keys(jsVariables).reduce((acc, jsKey) => {
        const sassKey = `$${formatKey(jsKey)}`
        const sassValue = formatValue(jsVariables[jsKey]);

        return `${acc}\n${sassKey}: ${sassValue};`
          // TODO: Weird Sass issue with having only one element.
          .replace(/\)\)/g, '),)');
      }, '');
    } catch(e) {
      console.error(e);
    }

    return {
      contents: variableSass,
    };
  }
}
