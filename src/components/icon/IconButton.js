import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./IconButton.scss');
}

export default class IconButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  }

  render() {
    const { children, className, size, ...rest } = this.props;
    const classes = classnames(className, 'ax-icon-button', {
      [`ax-icon-button--${size}`]: size,
    });

    const sizeMap = {
      'small': 10,
      'medium': 14,
      'large': 28,
    };

    return (
      <Base Component="button" { ...rest } className={ classes }>
        { cloneElement(children, { size: sizeMap[size] }) }
      </Base>
    );
  }
}
