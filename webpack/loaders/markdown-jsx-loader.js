var Remarkable = require('remarkable');

var markdownParser = content => {
  var md = new Remarkable();

  return md.render(content);
};

module.exports = function markdownLoader(source) {
  this.cacheable && this.cacheable();

  return `
    import React from 'react';
    module.exports = () => (
      <div>
        ${markdownParser(source)}
      </div>
    );
  `;
}
