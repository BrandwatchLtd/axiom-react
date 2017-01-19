import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./Dock.scss');
}

export default class Dock extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ul { ...rest } className="ax-platform__dock">
        { children }
      </ul>
    );
  }
}
