import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./layout__header.scss');
}

export class LayoutHeader extends Component {
  render() {
    const { children } = this.props;

    return (
      <header className="ax-layout__header">
        { children }
      </header>
    );
  }
}

LayoutHeader.propTypes = {
  children: PropTypes.node,
};

export default LayoutHeader;
