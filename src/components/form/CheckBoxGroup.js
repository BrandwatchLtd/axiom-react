import React, { Component, PropTypes } from 'react';
import ChedioButtoxGroup from './ChedioButtoxGroup';

export default class CheckBoxGroup extends Component {
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
