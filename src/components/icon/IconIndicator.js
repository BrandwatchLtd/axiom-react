import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Icon } from 'bw-axiom';
import './IconIndicator.css';

export default class IconIndicator extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'subtle']),
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    color: 'info',
    size: 'small',
  };

  render() {
    const { color, name, size, ...rest } = this.props;
    const classes = classnames(
      'ax-icon-indicator',
      `ax-icon-indicator--${color}`,
      `ax-icon-indicator--${size}`
    );

    const sizeMap = {
      'small': '1rem',
      'medium': '2rem',
      'large': '3rem',
    };

    return (
      <Base { ...rest } className={ classes }>
        <Icon name={ name } size={ sizeMap[size] } />
      </Base>
    );
  }
}
