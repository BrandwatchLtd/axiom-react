import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class Underline extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="u">
        { children }
      </Base>
    );
  }
}
