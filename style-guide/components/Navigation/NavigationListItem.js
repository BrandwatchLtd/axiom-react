import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { Reveal, Strong } from 'bw-axiom';
import NavigationList from './NavigationList';

export default class NavigationListItem extends Component {
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
      'dm-navigation__list-item', {
        'dm-navigation__list-item--active': isActive,
        'dm-navigation__list-item--has-submenu': hasChildren,
      }
    );

    return (
      <li className={ classes }>
        { !hasChildren ? (
          <RouterLink className="dm-navigation__link" to={ to }>
            <Strong>{ name }</Strong>
          </RouterLink>
        ) : (
          <a className="dm-navigation__link" onClick={ () => onClick(item) }>
            <Strong>{ name }</Strong>
          </a>
        ) }

        { hasChildren && (
          <Reveal visible={ isOpen }>
            <NavigationList
                items={ children }
                onItemClick={ onClick } />
          </Reveal>
        ) }
      </li>
    );
  }
}
