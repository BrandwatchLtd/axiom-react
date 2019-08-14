import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Validate from '../Validation/Validate';
import InputWrapper from './InputWrapper';
import ProgressInfinite from '../Progress/ProgressInfinite';
import './TextArea.css';

export default class TextArea extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** See Validate[error] */
    error: PropTypes.func,
    /** Minimum height of the input field */
    height: PropTypes.number,
    /** Applies styling to indicate the users input was invalid */
    invalid: PropTypes.bool,
    /** Adds a progress indicator the the right of the text input */
    isInProgress: PropTypes.bool,
    /** Descriptive label that is placed with the input field */
    label: PropTypes.node,
    /** Handler for when the input field is blurred */
    onBlur: PropTypes.func,
    /** Handler for when the input field is focused */
    onFocus: PropTypes.func,
    /** See Validate[patterns] */
    patterns: PropTypes.array,
    /**
     * Descriptive placeholder text that is displayed in the input field
     * when there is no value
     */
    placeholder: PropTypes.string,
    /** See Validate[required] */
    required: PropTypes.bool,
    /**
     * Specifies text to be used in the form element's usage hint that is
     * displayed in a tooltip coming off a question mark in the top right
     */
    usageHint: PropTypes.string,
    /** direction of usagehint popup */
    usageHintPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** Applies styling to indicate the users input was valid */
    valid: PropTypes.bool,
    /** Value of the input field */
    value: PropTypes.any,
  };

  static defaultProps = {
    height: 150,
  };

  constructor(props) {
    super(props);
    this.state = { hasFocus: false };
  }

  handleOnBlur() {
    const { onBlur = () => {} } = this.props;
    this.setState({ hasFocus: false });
    onBlur(...arguments);
  }

  handleOnFocus() {
    const { onFocus = () => {} } = this.props;
    this.setState({ hasFocus: true });
    onFocus(...arguments);
  }

  render() {
    const {
      disabled,
      error,
      height,
      invalid,
      isInProgress,
      label,
      patterns,
      placeholder,
      required,
      usageHint,
      usageHintPosition,
      valid,
      value,
      ...rest } = this.props;

    const { hasFocus } = this.state;

    const style = { minHeight: height };

    const textareaClasses = (isValid) => classnames('ax-textarea', {
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
          <InputWrapper
              disabled={ disabled }
              hasFocus={ hasFocus }
              invalid={ invalid }
              isValid={ isValid }
              label={ label }
              usageHint={ usageHint }
              usageHintPosition={ usageHintPosition }
              valid={ valid }>
            <Base { ...rest }
                Component="textarea"
                className={ textareaClasses(isValid) }
                disabled={ disabled }
                onBlur={ this.handleOnBlur.bind(this) }
                onFocus={ this.handleOnFocus.bind(this) }
                placeholder={ placeholder }
                style={ style }
                value={ value } />
            {
              isInProgress && (
                <span className="ax-textarea__progress">
                  <ProgressInfinite sizeRem="1rem" />
                </span>
              )
            }
          </InputWrapper>
        }
      </Validate>
    );
  }
}
