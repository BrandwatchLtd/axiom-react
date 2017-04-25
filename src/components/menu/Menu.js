import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Menu.css';

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="ul" className="ax-menu">
        { children }
      </Base>
    );
  }
}
