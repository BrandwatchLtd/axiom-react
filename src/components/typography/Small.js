import React, { Component } from 'react';
import { Text } from 'bw-axiom';

export default class Small extends Component {
  render() {
    return (
      <Text { ...this.props } Component="small" textSize="small" />
    );
  }
}
