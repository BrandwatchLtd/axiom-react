import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./layout.scss');
}

export class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout">
        { children }
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
