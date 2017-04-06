import React, { Component } from 'react';
import ChedioButtox from './ChedioButtox';
import './CheckBox.css';

export default class CheckBox extends Component {
  render() {
    return (
      <ChedioButtox
          { ...this.props }
          indicatorClassName="ax-checkbox__indicator"
          inputClassName="ax-checkbox"
          inputType="checkbox" />
    );
  }
}
