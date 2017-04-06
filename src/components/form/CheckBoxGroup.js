import React, { Component } from 'react';
import ChedioButtoxGroup from './ChedioButtoxGroup';

export default class CheckBoxGroup extends Component {
  render() {
    return (
      <ChedioButtoxGroup { ...this.props } />
    );
  }
}
