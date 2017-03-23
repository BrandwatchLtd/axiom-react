import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './Strong.css';

export default class Strong extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="strong" className="ax-text--strong">
        { children }
      </Base>
    );
  }
}
