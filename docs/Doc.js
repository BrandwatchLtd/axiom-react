import React, { PropTypes } from 'react';

const Doc = ({ children }) => {
  return (
    <div>
      <h1>Content docs</h1>
      { children }
    </div>
  );
};

Doc.propTypes = {
  children: PropTypes.node,
};

export default Doc;
