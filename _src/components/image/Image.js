import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Image extends Component {
  static propTypes = {
    src: { string: true, isRequired: true },
  };

  render() {
    return (
      <img { ...this.props } />
    );
  }
}

export default enhance(Image)(
  addPropTypes('global'),
  addClassName('global'),
);
