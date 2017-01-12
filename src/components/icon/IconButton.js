import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

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
      'small': '0.875rem',
      'medium': '1.25rem',
      'large': '2.2rem',
    };

    return (
      <Base Component="button" { ...rest } className={ classes }>
        { cloneElement(children, { size: sizeMap[size] }) }
      </Base>
    );
  }
}
