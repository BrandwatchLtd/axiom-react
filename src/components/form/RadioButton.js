import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import ChedioButtox from './ChedioButtox';
import Validate from '../validation/Validate';
import './RadioButton.css';

export default class RadioButton extends Component {
  static propTypes = {
    /** Checked state of the input */
    checked: PropTypes.bool,
    /** Label that is placed next to the input */
    children: PropTypes.node,
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** See Validate error */
    error: PropTypes.func,
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
      patterns,
      required,
      ...rest
    } = this.props;

    const classes = (isValid) => classnames('ax-radio__indicator', {
      'ax-radio__indicator--invalid': invalid || isValid === false,
    });

    return (
      <Validate
          error={ error }
          patterns={ patterns }
          required={ required }
          value={ checked }>
        { (isValid) =>
          <ChedioButtox
              { ...rest }
              checked={ checked }
              disabled={ disabled }
              indicatorClassName={ classes(isValid) }
              inputClassName="ax-radio"
              inputType="radio"
              invalid={ invalid || isValid === false }
              name={ name }>
            { children }
          </ChedioButtox>
        }
      </Validate>
    );
  }
}
