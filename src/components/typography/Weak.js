import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Weak.css';

export default class Weak extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="span" className="ax-text--weak">
        { children }
      </Base>
    );
  }
}
