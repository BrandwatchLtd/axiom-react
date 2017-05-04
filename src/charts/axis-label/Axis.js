import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Base } from 'bw-axiom';
import './Axis.css';

export default class Axis extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } className="ax-axis-labels">
        { children }
      </Base>
    );
  }
}