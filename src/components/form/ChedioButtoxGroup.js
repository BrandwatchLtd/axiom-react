import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class ChedioButtoxGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chedio-buttox-group">
        { children }
      </Base>
    );
  }
}
