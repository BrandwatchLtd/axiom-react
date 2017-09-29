import React, { Component } from 'react';
import Base from '../base/Base';
import './Text.css';

export default class Text extends Component {
  render() {
    return (
      <Base Component="span" { ...this.props } />
    );
  }
}
