import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LayoutNav = ({ items }) => (
  <div>
    { items.map(({ title, children }, index) => (
      <div key={ index }>
        <div>{ title }</div>
        { children.map(({ title, route }, index) => (
          <Link key={ index } to={ route }>{ title }</Link>
        )) }
      </div>
    )) }
  </div>
);

LayoutNav.propTypes = {
  items: PropTypes.array,
};

export default LayoutNav;
