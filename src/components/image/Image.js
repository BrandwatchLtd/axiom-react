import React, { Component } from 'react';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('../image/Image.scss');
}

export class Image extends Component {
  static propTypes = {
    src: { string: true, isRequired: true },
  };

  render() {
    return (
      <Base Component="img" { ...this.props } />
    );
  }
}

export default enhance(Image)(addPropTypes());
