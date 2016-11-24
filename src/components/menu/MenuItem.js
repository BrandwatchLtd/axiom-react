import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import Link from '../typography/Link';

if (__INCLUDE_CSS__) {
  require('./MenuItem.scss');
}

export default class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
  };

  render() {
    const { className, children, isActive, isDisabled, ...rest } = this.props;
    const classes = classnames(className, 'ax-menu__item', {
      'ax-menu__item--active': isActive,
      'ax-menu__item--disabled': isDisabled,
    });

    return (
      <Base Component="li" className={ classes }>
        <Link
            className="ax-menu__item-link"
            disabled={ isDisabled }
            inheritColor={ true }
            noDecoration={ true }
            { ...rest }>
          { children }
        </Link>
      </Base>
    );
  }
}
