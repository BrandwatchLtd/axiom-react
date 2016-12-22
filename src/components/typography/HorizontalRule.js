import React, { Component } from 'react';

if (__INCLUDE_CSS__) {
  require('./HorizontalRule.scss');
}

export default class HorizontalRule extends Component {
  render() {
    return (
      <hr className="ax-horizontal-rule" />
    );
  }
}
