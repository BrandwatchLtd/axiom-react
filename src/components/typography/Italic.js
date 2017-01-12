import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class Italic extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base Component="em" { ...rest }>
        { children }
      </Base>
    );
  }
}
