import React, { Component, PropTypes } from 'react';
import ChedioButtoxGroup from './ChedioButtoxGroup';

export default class CheckBoxGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <ChedioButtoxGroup { ...this.props } />
    );
  }
}
