import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import Base from '../Base/Base';
import './Menu.css';

export default class Menu extends Component {
  static propTypes = {
    /** MenuItems */
    children: PropTypes.node,
    /** Size of the menu */
    size: PropTypes.oneOf(['medium', 'large']),
  };

  static childContextTypes = {
    size: PropTypes.string.isRequired,
  };

  static defaultProps = {
    size: 'large',
  };

  getChildContext() {
    return {
      size: this.props.size,
    };
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base {...omit(rest, ['size'])} Component="ul" className="ax-menu">
        {children}
      </Base>
    );
  }
}
