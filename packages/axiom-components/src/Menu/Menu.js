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

  static defaultProps = {
    size: 'large',
  };

  render() {
    const { children, size, ...rest } = this.props;

    const mappedChildren = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          size,
        });
      }
      return child;
    });

    return (
      <Base { ...omit(rest, ['size']) } Component="ul" className="ax-menu">
        { mappedChildren }
      </Base>
    );
  }
}
