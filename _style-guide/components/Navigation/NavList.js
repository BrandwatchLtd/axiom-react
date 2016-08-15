import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import NavListItem from './NavListItem';

if (__INCLUDE_CSS__) {
  require('./NavList.scss');
}

export default class NavList extends Component {
  static propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isOpen: PropTypes.bool,
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
  };

  render() {
    const {
      className,
      items = [],
      isOpen = false,
      isActive = false,
      onItemClick,
    } = this.props;

    const classes = classnames(className,
      'dm-nav__list', {
        'dm-nav__list--open': isOpen || isActive,
      }
    );

    return (
      <ul className={ classes }>
        { items.filter(({ hidden }) => !hidden).map((item, index) =>
          <NavListItem item={ item } key={ index } onClick={ onItemClick } />
        ) }
      </ul>
    );
  }
}
