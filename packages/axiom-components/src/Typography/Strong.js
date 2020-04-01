import React, { Component } from 'react';
import Text from './Text';

export default class Strong extends Component {
  render() {
    return <Text {...this.props} Component="strong" textStrong />;
  }
}
