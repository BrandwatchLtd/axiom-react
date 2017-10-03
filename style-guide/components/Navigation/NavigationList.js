import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import NavigationListItem from './NavigationListItem';

export default class NavigationList extends Component {
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
      'dm-navigation__list', {
        'dm-navigation__list--open': isOpen || isActive,
      }
    );

    return (
      <ul className={ classes }>
        { items.map((item, index) =>
          <NavigationListItem item={ item } key={ index } onClick={ onItemClick } />
        ) }
      </ul>
    );
  }
}
