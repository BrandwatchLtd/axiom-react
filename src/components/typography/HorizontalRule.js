import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './HorizontalRule.css';

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
