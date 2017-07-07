import React, { Component } from 'react';
import { Text } from 'bw-axiom';

export default class Paragraph extends Component {
  render() {
    return (
      <Text space="tiny" { ...this.props }  Component="p" />
    );
  }
}
