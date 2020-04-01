import React, { Component } from 'react';
import Icon from '../Icon/Icon';

export default class TextIcon extends Component {
  render() {
    return <Icon {...this.props} inline />;
  }
}
