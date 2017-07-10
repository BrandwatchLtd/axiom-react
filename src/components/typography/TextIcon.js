import React, { Component } from 'react';
import { Icon } from 'bw-axiom';

export default class TextIcon extends Component {
  render() {
    return (
      <Icon { ...this.props } inline={ true } />
    );
  }
}
