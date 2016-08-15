import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import ChedioButtox from './ChedioButtox';

if (__INCLUDE_CSS__) {
  require('./CheckBox.scss');
}

export class CheckBox extends Component {
  render() {
    return (
      <ChedioButtox
          { ...this.props }
          inputClassName="ax-checkbox"
          inputType="checkbox"
          labelClassName="ax-checkbox__label" />
    );
  }
}

export default enhance(CheckBox)(
  addPropTypes('global'),
  addClassName('global'),
);
