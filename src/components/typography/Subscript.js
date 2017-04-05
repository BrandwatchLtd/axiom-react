import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './Subscript.css';

export default class Subscript extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="sub" className="ax-text--subscript">
        { children }
      </Base>
    );
  }
}
