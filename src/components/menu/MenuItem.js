import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./MenuItem.scss');
}

export default class MenuItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
  };

  render() {
    const { className, children, active, disabled, ...rest } = this.props;
    const classes = classnames(className, 'ax-menu__item', {
      'ax-menu__item--active': active,
      'ax-menu__item--disabled': disabled,
    });

    return (
      <Base Component="li" className={ classes }>
        <button { ...rest } className="ax-menu__item-button" disabled={ disabled }>
          { children }
        </button>
      </Base>
    );
  }
}
