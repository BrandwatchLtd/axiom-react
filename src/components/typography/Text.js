import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Text.css';

export default class Text extends Component {
  render() {
    return (
      <Base Component="span" { ...this.props } />
    );
  }
}
