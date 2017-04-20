import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link as RouterLink } from 'react-router';
import { Strong } from 'bw-axiom';
import NavList from './NavList';
import './NavListItem.css';

export default class NavListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    item: PropTypes.shape({
      children: PropTypes.array,
      isOpen: PropTypes.bool.isRequired,
      isActive: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      to: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func,
  };

  render() {
    const {
      className,
      onClick,
      item,
      item: {
        to,
        name,
        children,
        isOpen,
        isActive,
      },
    } = this.props;

    const hasChildren = Array.isArray(children) && children.length > 0;
    const classes = classnames(className,
      'dm-nav__list-item', {
        'dm-nav__list-item--open': hasChildren && isOpen,
        'dm-nav__list-item--active': isActive,
        'dm-nav__list-item--has-submenu': hasChildren,
      }
    );

    return (
      <li className={ classes }>
        { do { if (!hasChildren) {
          <RouterLink className="dm-nav__link" to={ to }>
            <Strong>{ name }</Strong>
          </RouterLink>;
        } else {
          <a className="dm-nav__link" onClick={ () => onClick(item) }>
            <Strong>{ name }</Strong>
          </a>;
        } } }

        { do {
          if (hasChildren) {
            <NavList
                isOpen={ isOpen }
                items={ children }
                onItemClick={ onClick } />;
          }
        } }
      </li>
    );
  }
}
