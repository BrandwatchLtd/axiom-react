import React, { Component } from 'react';
import Icon from '../icon/Icon';

export default class TextIcon extends Component {
  render() {
    return (
      <Icon { ...this.props } inline />
    );
  }
}
