import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import ChedioButtox from './ChedioButtox';
import './CheckBox.css';

export default class CheckBox extends Component {
  static propTypes = {
    /** Label that is placed next to the input */
    children: PropTypes.node,
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** Applies styling to indicate the users input was invalid */
    invalid: PropTypes.bool,
    /** Name of the group the input belongs to */
    name: PropTypes.string,
    /** Text that is displayed on hover */
    title: PropTypes.string,
  };

  render() {
    const { children, disabled, invalid, name, ...rest } = this.props;
    const classes = classnames('ax-checkbox__indicator', {
      'ax-checkbox__indicator--invalid': invalid,
    });

    return (
      <ChedioButtox
          { ...rest }
          disabled={ disabled }
          indicatorClassName={ classes }
          inputClassName="ax-checkbox"
          inputType="checkbox"
          invalid={ invalid }
          name={ name }>
        { children }
      </ChedioButtox>
    );
  }
}
