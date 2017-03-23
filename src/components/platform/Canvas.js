import React, { Component, PropTypes } from 'react';
import './Canvas.css';

export default class Canvas extends Component {
  static propTypes = {
    children: PropTypes.node,
    isShifted: PropTypes.bool,
  };

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, isShifted, ...rest } = this.props;
    const { consoleWidth } = this.context;
    const style = {
      marginRight: isShifted && consoleWidth,
      transform: isShifted && `translateX(${consoleWidth})`,
    };

    return (
      <div { ...rest } className="ax-platform__canvas" style={ style }>
        { children }
      </div>
    );
  }
}
