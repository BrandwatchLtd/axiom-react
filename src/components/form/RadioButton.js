import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import ChedioButtox from './ChedioButtox';

if (__INCLUDE_CSS__) {
  require('./RadioButton.scss');
}

export class RadioButton extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    return (
      <ChedioButtox
          { ...this.props }
          inputClassName="ax-radio"
          inputType="radio"
          labelClassName="ax-radio__label" />
    );
  }
}

export default enhance(RadioButton)(
  addPropTypes('global'),
  addClassName('global'),
);
