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
    memo[packageName] = parse(exportList, { sourceType: 'module' }).program.body
      .reduce((exprts, exprt) => Object.assign({}, exprts,
        exprt.specifiers.reduce((specs, spec) => Object.assign({}, specs, {
          [spec.exported.name]: path.join(`${packageName}/dist`, exprt.source.value),
        }), {}),
      ), {});
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
