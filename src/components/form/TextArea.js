import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import TextGroup from './TextGroup';
import Validate from '../validation/Validate';
import './TextArea.css';

export default class TextArea extends Component {
  static propTypes = {
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** See Validate[error] */
    error: PropTypes.func,
    /** Minimum height of the input field */
    height: PropTypes.number,
    /** Applies styling to indicate the users input was invalid */
    invalid: PropTypes.bool,
    /** Descriptive label that is placed with the input field */
    label: PropTypes.string,
    /** See Validate[patterns] */
    patterns: PropTypes.array,
    /**
     * Descriptive placeholder text that is displayed in the input field
     * when there is no value
     */
    placeholder: PropTypes.string,
    /** See Validate[required] */
    required: PropTypes.bool,
    /** Applies styling to indicate the users input was valid */
    valid: PropTypes.bool,
    /** Value of the input field */
    value: PropTypes.any,
  };

  static defaultProps = {
    height: 150,
  };

  render() {
    const {
      disabled,
      error,
      height,
      invalid,
      label,
      patterns,
      placeholder,
      required,
      valid,
      value,
      ...rest } = this.props;

    const style = { minHeight: height };
    const classes = (isValid) => classnames('ax-textarea', {
      'ax-textarea--valid': valid,
      'ax-textarea--invalid': invalid || isValid === false,
    });

    return (
      <Validate
          error={ error }
          patterns={ patterns }
          required={ required }
          value={ value }>
        { (isValid) =>
          <TextGroup label={ label }>
            <Base { ...rest }
                Component="textarea"
                className={ classes(isValid) }
                disabled={ disabled }
                placeholder={ placeholder }
                style={ style }
                value={ value } />
          </TextGroup>
        }
      </Validate>
    );
  }
}
