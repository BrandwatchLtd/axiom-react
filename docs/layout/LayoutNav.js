import React, { PropTypes } from 'react';

const LayoutNav = ({ items }) => (
  <div>
    { console.log(items) }
    nav
  </div>
);

LayoutNav.propTypes = {
  children: PropTypes.node,
};

export default LayoutNav;
