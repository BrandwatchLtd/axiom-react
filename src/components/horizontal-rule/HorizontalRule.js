import React, { Component } from 'react';
import './HorizontalRule.css';
import Base from '../base/Base';

export default class HorizontalRule extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      <Base { ...rest } Component="hr" className="ax-horizontal-rule" />
    );
  }
}

