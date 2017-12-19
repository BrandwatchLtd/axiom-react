import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

export default class Console extends Component {
  static propTypes = {
    children: PropTypes.node,
    position: PropTypes.oneOf(['left', 'right']).isRequired,
    width: PropTypes.string.isRequired,
  };

  static contextTypes = {
    openConsolePosition: PropTypes.string,
  };

  static childContextTypes = {
    consolePosition: PropTypes.string,
  };

  getChildContext() {
    return {
      consolePosition: this.props.position,
    };
  }

  render() {
    const { children, position, width, ...rest } = this.props;
    const { openConsolePosition } = this.context;
    const style = { width };
    const classes = classnames(
      'ax-platform__console',
      `ax-platform__console--${position}`, {
        'ax-platform__console--open': openConsolePosition === position,
      }
    );

    return (
      <Base { ...rest } className={ classes } style={ style }>
        { children }
      </Base>
    );
  }
}
