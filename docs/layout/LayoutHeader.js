import React, { Component, PropTypes } from 'react';

export class LayoutHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <header>
        { children }
      </header>
    );
  }
}

export default LayoutHeader;
