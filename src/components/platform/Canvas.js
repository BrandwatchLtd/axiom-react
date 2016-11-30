import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./Canvas.scss');
}

export default class Canvas extends Component {
  static propTypes = {
    children: PropTypes.node,
    isShifted: PropTypes.bool,
  };

  render() {
    const { children, isShifted } = this.props;
    const classes = classnames('ax-platform__canvas', {
      'ax-platform__canvas--shifted': isShifted,
    });

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}
