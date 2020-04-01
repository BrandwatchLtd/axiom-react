import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class DockHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ul {...rest} className="ax-dock__list-header">
        {children}
      </ul>
    );
  }
}
