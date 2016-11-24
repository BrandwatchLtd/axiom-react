import React, { Component, PropTypes } from 'react';
import ChedioButtox from './ChedioButtox';

if (__INCLUDE_CSS__) {
  require('./CheckBox.scss');
}

export default class CheckBox extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

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
