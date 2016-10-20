/**
 *
 */

function Alias(matchRegex, replace) {
  this.aliasMatchRegex = matchRegex;
  this.aliasReplace = replace;
}

Alias.prototype.isMatch = function(path) {
  return this.aliasMatchRegex.test(path);
};

Alias.prototype.replace = function(path) {
  if (typeof this.aliasReplace === 'function') {
    return this.aliasReplace(path);
  }

  return this.aliasReplace;
};

Alias.prototype.apply = function(compiler) {
  compiler.plugin('normal-module-factory', (nmf) => {
    nmf.plugin('before-resolve', (result, callback) => {
      if (!result) return callback();
      if (this.isMatch(result.request)) {
        result.request = this.replace(result.request);
      }

      return callback(null, result);
    });
  });
};

module.exports = Alias;
