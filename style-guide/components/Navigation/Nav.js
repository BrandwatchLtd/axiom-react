import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import NavList from './NavList';
import './Nav.css';

export default class Nav extends Component {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
  };

  render() {
    const {
      className,
      items,
      onItemClick = () => {},
    } = this.props;

    return (
      <nav className={ classnames(className, 'dm-nav') }>
        <NavList items={ items } onItemClick={ onItemClick } />
      </nav>
    );
  }
}
