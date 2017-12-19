import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class DockItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <li className="ax-dock__item">
        <div { ...rest } className="ax-dock__item-wrapper">
          { children }
        </div>
      </li>
    );
  }
}
