import React, { Component } from 'react';
import ChedioButtox from './ChedioButtox';
import './RadioButton.css';

export default class RadioButton extends Component {
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
