import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './DockItem.css';

export default class DockItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <li className="ax-platform__dock-item">
        <div { ...rest } className="ax-platform__dock-item-wrapper">
          { children }
        </div>
      </li>
    );
  }
}
