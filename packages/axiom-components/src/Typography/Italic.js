import React, { Component } from 'react';
import Text from './Text';

export default class Italic extends Component {
  render() {
    return (
      <Text { ...this.props } Component="em" textEmphasize />
    );
  }
}
