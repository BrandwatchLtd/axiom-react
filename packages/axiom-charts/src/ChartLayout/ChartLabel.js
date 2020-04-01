import React, { Component } from 'react';
import { Text } from '@brandwatch/axiom-components';

export default class ChartLabel extends Component {
  render() {
    return (
      <Text
        {...this.props}
        textBreak="none"
        textColor="subtle"
        textSize="small"
      />
    );
  }
}
