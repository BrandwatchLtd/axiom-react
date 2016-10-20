const loaderUtils = require('loader-utils');
const { AXIOM_SASS_VARIABLE_FORMAT } = require('./_config');

module.exports = function sassVariableOverrideLoader(source) {
  this.cacheable && this.cacheable();

  const webpackRemainingChain = loaderUtils.getRemainingRequest(this).split('!');
  const filename = webpackRemainingChain[webpackRemainingChain.length - 1];
  const query = loaderUtils.parseQuery(this.query);
  const location = query.location;

  if (!location || !AXIOM_SASS_VARIABLE_FORMAT.test(filename)) {
    return source;
  }

  this.addDependency(location);

  return `
    ${source}

    const userVars = require('${location}');
    module.exports = Object.keys(module.exports || {}).reduce((vars, key) => {
      return Object.assign({}, vars, {
        [key]: (userVars[key] || module.exports[key]),
      });
    }, {});
  `;
};
