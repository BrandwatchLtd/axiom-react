import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import Link from '../typography/Link';

if (__INCLUDE_CSS__) {
  require('./MenuItem.scss');
}

export class MenuItem extends Component {
  static propTypes = {
    children: { node: true },
    isActive: { bool: true },
    isDisabled: { bool: true },
  };

  render() {
    const { className, children, isActive, isDisabled, ...rest } = this.props;
    const classes = classnames(className, 'ax-menu__item', {
      'ax-menu__item--active': isActive,
      'ax-menu__item--disabled': isDisabled,
    });

    return (
      <li className={ classes }>
        <Link
            className="ax-menu__item-link"
            disabled={ isDisabled }
            inheritColor={ true }
            noDecoration={ true }
            { ...rest }>
          { children }
        </Link>
      </li>
    );
  }
}

export default enhance(MenuItem)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
