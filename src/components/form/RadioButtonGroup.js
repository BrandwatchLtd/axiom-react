import React, { Component, PropTypes } from 'react';
import ChedioButtoxGroup from './ChedioButtoxGroup';

export default class RadioButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <ChedioButtoxGroup { ...this.props } />
    );
  }
}
