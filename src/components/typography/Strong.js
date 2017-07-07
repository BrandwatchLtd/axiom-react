import React, { Component } from 'react';
import { Text } from 'bw-axiom';

export default class Strong extends Component {
  render() {
    return (
      <Text { ...this.props } Component="strong" textStrong={ true } />
    );
  }
}
