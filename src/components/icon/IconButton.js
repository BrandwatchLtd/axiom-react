import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Icon } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./IconButton.scss');
}

export default class IconButton extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  }

  render() {
    const { className, name, size, ...rest } = this.props;
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
        <Icon name={ name } size={ sizeMap[size] } />
      </Base>
    );
  }
}
