import React, { Component } from 'react';
import Text from '../Typography/Text';

export default class ConsoleMenuHeaderTitle extends Component {
  render() {
    return (
      <Text {...this.props} textCase="upper" textSize="small" textStrong />
    );
  }
}
