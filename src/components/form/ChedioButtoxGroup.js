import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ChedioButtoxGroup.scss');
}

export default class ChedioButtoxGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-chedio-buttox__group">
        { children }
      </Base>
    );
  }
}
