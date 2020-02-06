import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Validate from '../Validation/Validate';
import ChedioButtox from './ChedioButtox';

export default class CheckBox extends Component {
  static propTypes = {
    /** Checked state of the input */
    checked: PropTypes.bool,
    /** Label that is placed next to the input */
    children: PropTypes.node,
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** See Validate[error] */
    error: PropTypes.func,
    /** Partially checked state of the input */
    indeterminate: PropTypes.bool,
    /** Applies styling to indicate the users input was invalid */
    invalid: PropTypes.bool,
    /** Name of the group the input belongs to */
    name: PropTypes.string,
    /** See Validate[patterns] */
    patterns: PropTypes.array,
    /** See Validate[required] */
    required: PropTypes.bool,
    /** Text that is displayed on hover */
    title: PropTypes.string,
  };

  render() {
    const {
      checked,
      children,
      disabled,
      error,
      invalid,
      name,
      indeterminate,
      patterns,
      required,
      ...rest
    } = this.props;

    return (
      <Validate
          error={ error }
          patterns={ patterns }
          required={ required }
          value={ checked }>
        { (isValid) =>
          <ChedioButtox
              { ...rest }
              checked={ !!(checked || indeterminate) }
              className="ax-checkbox"
              disabled={ disabled }
              indeterminate={ indeterminate && !checked }
              inputType="checkbox"
              invalid={ invalid || isValid === false }
              name={ name }>
            { children }
          </ChedioButtox>
        }
      </Validate>
    );
  }
}
