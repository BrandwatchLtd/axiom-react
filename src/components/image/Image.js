import React, { Component } from 'react';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('../image/Image.scss');
}

export default class Image extends Component {
  render() {
    return (
      <Base Component="img" { ...this.props } />
    );
  }
}
