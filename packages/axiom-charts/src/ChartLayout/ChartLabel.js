import React, { Component } from 'react';
import { Text } from '@brandwatch/axiom-components';

export default class ChartLabel extends Component {
  render() {
    return (
      <Text { ...this.props } textColor="subtle" textSize="small" />
    );
  }
}
