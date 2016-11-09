import React, { Component } from 'react';
import { enhance, addPropTypes } from '../_utils/components';
import ChedioButtoxGroup from './ChedioButtoxGroup';

export class RadioButtonGroup extends Component {
  static propTypes = {
    children: { node: true },
    inline: { bool: true },
  };

  render() {
    return (
      <ChedioButtoxGroup { ...this.props } />
    );
  }
}

export default enhance(RadioButtonGroup)(addPropTypes());
