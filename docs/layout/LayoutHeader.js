import React, { Component, PropTypes } from 'react';

export class LayoutHeader extends Component {
  render() {
    const { children } = this.props;

    return (
      <header>
        { children }
      </header>
    );
  }
}

LayoutHeader.propTypes = {
  children: PropTypes.node,
};

export default LayoutHeader;
