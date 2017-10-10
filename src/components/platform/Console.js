import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import classnames from 'classnames';
import './Console.css';

export default class Console extends Component {
  static propTypes = {
    children: PropTypes.node,
    hasDock: PropTypes.bool,
    isVisible: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    hasDock: true,
    position: 'left',
  }

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, hasDock, isVisible, position, ...rest } = this.props;
    const { consoleWidth } = this.context;
    const style = { width: consoleWidth };
    const classes = classnames('ax-platform__console', {
      'ax-platform__console--visible-left': isVisible && hasDock && position === 'left',
      'ax-platform__console--visible-right': isVisible && hasDock && position === 'right',
      'ax-platform__console--visible-without-dock': !hasDock && isVisible,
      'ax-platform__console--right': position === 'right',
      'ax-platform__console--left': position === 'left',
    });

    return (
      <Base { ...rest } className={ classes } style={ style }>
        { children }
      </Base>
    );
  }
}
