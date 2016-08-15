import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Link from 'bw-axiom/components/typography/Link';
import NavList from './NavList';

if (__INCLUDE_CSS__) {
  require('./NavListItem.scss');
}

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

    function createOnItemClickHandler() {
      return () => onClick(item);
    }

    const hasChildren = Array.isArray(children) && children.length;
    const classes = classnames(className,
      'dm-nav__list-item', {
        'dm-nav__list-item--open': hasChildren && isOpen,
        'dm-nav__list-item--active': isActive,
        'dm-nav__list-item--has-submenu': hasChildren,
      }
    );

    return (
      <li className={ classes }>
        <Link
            className="dm-nav__link"
            onClick={ createOnItemClickHandler() }
            supressStyle={ true }
            to={ to }>{ name }</Link>

        { do {
          if (hasChildren) {
            <NavList
                isOpen={ isOpen }
                items={ children }
                onItemClick={ onClick } />
          }
        } }
      </li>
    );
  }
}
