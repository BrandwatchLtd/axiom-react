import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./layout__main.scss');
}

export class LayoutMain extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout__main">
        { children }
      </div>
    );
  }
}

LayoutMain.propTypes = {
  children: PropTypes.node,
};

export default LayoutMain;
