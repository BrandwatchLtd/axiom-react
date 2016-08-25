import React, { PropTypes } from 'react';
import cleanSnippet from './utils/cleanSnippet';
import { prepareSnippet } from './utils/code-formatting';

if (__INCLUDE_CSS__) {
  require('prismjs/themes/prism.css');
  require('./code.scss');
}

const Code = ({ children, language }) => {
  const clean = cleanSnippet(children, language);
  const { className, code } = prepareSnippet(clean, language);

  return (
    <pre className={ className }>
      <code
          className={ className }
          dangerouslySetInnerHTML={ { __html: code } } />
    </pre>
  );
};

Code.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string.isRequired,
};

export default Code;
