import React, { PropTypes } from 'react';

const LayoutSidebar = ({ children }) => (
  <div>
    { children }
  </div>
);

LayoutSidebar.propTypes = {
  children: PropTypes.node,
};

export default LayoutSidebar;
