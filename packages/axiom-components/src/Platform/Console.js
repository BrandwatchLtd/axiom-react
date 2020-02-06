import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class Console extends Component {
  static propTypes = {
    children: PropTypes.node,
    position: PropTypes.oneOf(['left', 'right']).isRequired,
    shade: PropTypes.oneOf(['shade-2', 'shade-3', 'shade-4']),
    width: PropTypes.string.isRequired,
  };

  static defaultProps = {
    shade: 'shade-3',
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
    const { children, position, shade, width, ...rest } = this.props;
    const { openConsolePosition } = this.context;
    const style = { width };
    const classes = classnames(
      'ax-platform__console',
      `ax-platform__console--${position}`,
      `ax-platform__console--${shade}`, {
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
