import React, { Component } from 'react';
import Text from './Text';

export default class Strike extends Component {
  render() {
    return (
      <Text { ...this.props } Component="del" textStrike />
    );
  }
}
