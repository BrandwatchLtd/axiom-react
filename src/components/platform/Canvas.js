import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./Canvas.scss');
}

export default class Canvas extends Component {
  static propTypes = {
    children: PropTypes.node,
    isShifted: PropTypes.bool,
  };

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, isShifted } = this.props;
    const { consoleWidth } = this.context;
    const style = {
      marginRight: isShifted && consoleWidth,
      transform: isShifted && `translateX(${consoleWidth})`,
    };

    return (
      <div className="ax-platform__canvas" style={ style }>
        { children }
      </div>
    );
  }
}
