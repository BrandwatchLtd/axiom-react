import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChedioButtox from './ChedioButtox';
import './CheckBox.css';

export default class CheckBox extends Component {
  static propTypes = {
    /** Label that is placed next to the input */
    children: PropTypes.node,
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** Name of the group the input belongs to */
    name: PropTypes.string,
  };

  render() {
    const { children, disabled, name, ...rest } = this.props;

    return (
      <ChedioButtox
          { ...rest }
          disabled={ disabled }
          indicatorClassName="ax-checkbox__indicator"
          inputClassName="ax-checkbox"
          inputType="checkbox"
          name={ name }>
        { children }
      </ChedioButtox>
    );
  }
}
