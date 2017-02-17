import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Icon } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./IconButton.scss');
}

export default class IconButton extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  };

  static defaultProps = {
    size: 'medium',
  }

  render() {
    const { name, size, ...rest } = this.props;
    const classes = classnames('ax-icon-button', {
      [`ax-icon-button--${size}`]: size,
    });

    const sizeMap = {
      'small': '1rem',
      'medium': '2rem',
      'large': '3rem',
      'huge': '6rem',
    };

    return (
      <Base Component="button" { ...rest } className={ classes }>
        <Icon name={ name } size={ sizeMap[size] } />
      </Base>
    );
  }
}
