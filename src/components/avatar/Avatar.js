import React, { Component } from 'react';
import { ImageCircle } from 'bw-axiom';

export default class Avatar extends Component {
  render() {
    return (
      <ImageCircle { ...this.props } />
    );
  }
}
