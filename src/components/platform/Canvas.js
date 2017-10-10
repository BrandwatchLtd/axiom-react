import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import classnames from 'classnames';
import './Canvas.css';

export default class Canvas extends Component {
  static propTypes = {
    children: PropTypes.node,
    hasDock: PropTypes.bool,
    isShifted: PropTypes.bool,
    shiftDirection: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    hasDock: true,
    shiftDirection: 'right',
  }

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, hasDock, isShifted, shiftDirection, ...rest } = this.props;
    const { consoleWidth } = this.context;
    const style = {
      marginRight: isShifted && consoleWidth,
      transform: isShifted && shiftDirection !== 'left' && `translateX(${consoleWidth})`,
    };
    const classes = classnames('ax-platform__canvas', {
      'ax-platform__canvas--no-dock': !hasDock,
    });

    return (
      <Base { ...rest } className={ classes } style={ style }>
        { children }
      </Base>
    );
  }
}
