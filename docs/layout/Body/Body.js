import React, { PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./body.scss');
}

const Body = ({ children }) => (
  <body className="ax-body">
    { children }
  </body>
);

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
