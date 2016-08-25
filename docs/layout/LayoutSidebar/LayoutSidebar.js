import React, { PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./layout__sidebar.scss');
}

const LayoutSidebar = ({ children }) => (
  <div className="ax-layout__sidebar">
    { children }
  </div>
);

LayoutSidebar.propTypes = {
  children: PropTypes.node,
};

export default LayoutSidebar;
