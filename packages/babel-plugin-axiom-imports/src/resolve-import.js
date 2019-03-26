const path = require('path');
const fs = require('fs');
const Module = require('module');
const { parse } = require('babylon');

const supportedAxiomPackages = [
  '@brandwatch/axiom-automation-testing',
  '@brandwatch/axiom-charts',
  '@brandwatch/axiom-components',
  '@brandwatch/axiom-composites',
  '@brandwatch/axiom-formatting',
  '@brandwatch/axiom-localization',
  '@brandwatch/axiom-materials',
  '@brandwatch/axiom-utils',
];

const exportsList = supportedAxiomPackages.reduce((memo, packageName) => {
  const importList = {};
  let exportList;

  try {
    exportList = fs.readFileSync(path.join(path.dirname(
      Module._resolveFilename(packageName, Object.assign({}, new Module, {
        'paths': Module._nodeModulePaths(process.cwd()),
      }))
    ), '../src/index.js'), 'utf8');
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
  }

  if (exportList) {
    memo[packageName] = {};
    parse(exportList, { sourceType: 'module' }).program.body.forEach((node) => {
      node.specifiers.forEach((spec) => {
        switch (spec.type) {
        case 'ImportNamespaceSpecifier':
          return importList[spec.local.name] = node.source.value;
        case 'ExportSpecifier':
          if (spec.local.name === spec.exported.name && importList[spec.local.name]) {
            memo[packageName][spec.local.name] = [path.join(`${packageName}/dist-esm`, importList[spec.local.name]), '*'];
          } else {
            memo[packageName][spec.exported.name] = [path.join(`${packageName}/dist-esm`, node.source.value), 'default'];
          }
        }
      });
    });
  }

  return memo;
}, {});

module.exports = (pkg, name) => {
  if (exportsList[pkg] && exportsList[pkg][name]) {
    return exportsList[pkg][name];
  }

  throw new Error(`Axiom export: ${name} was not found.`);
};

module.exports.packages = supportedAxiomPackages
  .reduce((packages, pkg) =>
    Object.assign({}, packages, { [pkg]: true })
  , {});
