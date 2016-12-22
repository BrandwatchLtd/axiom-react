import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Menu.scss');
}

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    size: 'small',
  };

  render() {
    const { className, children, size, ...rest } = this.props;
    const classes = classnames(className, 'ax-menu', {
      [`ax-menu--${size}`]: size,
    });

    return (
      <Base { ...rest } Component="ul" className={ classes }>
        { children }
      </Base>
    );
  }
}
