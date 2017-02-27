import React, { Component } from 'react';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./HorizontalRule.scss');
}

export default class HorizontalRule extends Component {
  render() {
    return (
      <Base
          space="small"
          { ...this.props }
          Component="hr"
          className="ax-horizontal-rule" />
    );
  }
}
