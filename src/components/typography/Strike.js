import React, { Component } from 'react';
import { Text } from 'bw-axiom';

export default class Strike extends Component {
  render() {
    return (
      <Text { ...this.props } Component="del" textStrike={ true } />
    );
  }
}
