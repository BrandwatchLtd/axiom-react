import React, { PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./code.scss');
}

const Code = ({ children }) => (
  <code className="ax-code">
    { children }
  </code>
);

Code.propTypes = {
  children: PropTypes.node,
};

export default Code;
