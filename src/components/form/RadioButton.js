import React, { Component, PropTypes } from 'react';
import ChedioButtox from './ChedioButtox';

if (__INCLUDE_CSS__) {
  require('./RadioButton.scss');
}

export default class RadioButton extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <ChedioButtox
          { ...this.props }
          indicatorClassName="ax-radio__indicator"
          inputClassName="ax-radio"
          inputType="radio" />
    );
  }
}
