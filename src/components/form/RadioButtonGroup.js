import React, { Component, PropTypes } from 'react';
import ChedioButtoxGroup from './ChedioButtoxGroup';

export default class RadioButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
  };

  render() {
    return (
      <ChedioButtoxGroup { ...this.props } />
    );
  }
}
