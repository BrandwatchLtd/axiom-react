import React, { Component } from 'react';
import { IconLink } from 'bw-axiom';

export default class TextInputIcon extends Component {
  render () {
    return (
      <span className="ax-input__icon">
        <IconLink { ...this.props } size="0.75rem" />
      </span>
    );
  }
}
