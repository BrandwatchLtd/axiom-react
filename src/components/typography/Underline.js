import React, { Component } from 'react';
import { Text } from 'bw-axiom';

export default class Underline extends Component {
  render() {
    return (
      <Text { ...this.props } Component="u" textUnderline={ true } />
    );
  }
}
