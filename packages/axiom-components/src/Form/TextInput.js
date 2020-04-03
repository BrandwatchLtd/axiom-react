import PropTypes from "prop-types";
import React, { Component } from "react";

import { findComponent } from "@brandwatch/axiom-utils";
import Base from "../Base/Base";
import Validate from "../Validation/Validate";
import TextInputIcon, { TextInputIconRef } from "./TextInputIcon";
import { TextInputButtonRef } from "./TextInputButton";
import ProgressInfinite from "../Progress/ProgressInfinite";
import InputWrapper from "./InputWrapper";
import "./TextInput.css";

export default class TextInput extends Component {
  static propTypes = {
    /** Optional TextInputIcon or TextInputButton all other children are ignored */
    children: PropTypes.node,
    /** Disables interactions and applies styling */
    disabled: PropTypes.bool,
    /** See Validate[error] */
    error: PropTypes.func,
    /** Display label inline */
    inlineLabel: PropTypes.bool,
    /** Pass this prop to get ref to the Text Component instance. */
    inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /** Applies styling to indicate the users input was invalid */
    invalid: PropTypes.bool,
    /** Adds a progress indicator the the right of the text input */
    isInProgress: PropTypes.bool,
    /** Changes the icon to pointer */
    isTarget: PropTypes.bool,
    /** Descriptive label that is placed with the input field */
    label: PropTypes.string,
    /** Vertical margin between label and input */
    labelSpace: PropTypes.oneOf([
      "x0",
      "x1",
      "x2",
      "x3",
      "x4",
      "x5",
      "x6",
      "x8",
    ]),
    /** Handler for when the input field is blurred */
    onBlur: PropTypes.func,
    /** Handler for changing the input field */
    onChange: PropTypes.func,
    /** Handler for requesting to clear the input field */
    onClear: PropTypes.func,
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
    /** Size of the input field */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /** SKIP */
    space: PropTypes.string,
    /** Visual style variations of the input field */
    style: PropTypes.oneOf(["overlay"]),
    /** Type of the input field */
    type: PropTypes.oneOf(["password", "text", "number"]),
    /**
     * Specifies text to be used in the form element's usage hint that is
     * displayed in a tooltip coming off a question mark in the top right
     */
    usageHint: PropTypes.node,
    /** direction of usagehint popup */
    usageHintPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    /** Applies styling to indicate the users input was valid */
    valid: PropTypes.bool,
    /** Value of the input field */
    value: PropTypes.string,
  };

  static childContextTypes = {
    size: PropTypes.string,
  };

  static defaultProps = {
    size: "medium",
    space: "x4",
    type: "text",
    inlineLabel: false,
  };

  constructor(props) {
    super(props);
    this.state = { hasFocus: false };
  }

  getChildContext() {
    return {
      size: this.props.size,
    };
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
      children,
      disabled,
      error,
      valid,
      invalid,
      isInProgress,
      isTarget,
      label,
      labelSpace,
      onClear,
      patterns,
      required,
      size,
      space,
      style,
      type,
      usageHint,
      usageHintPosition,
      value,
      inputRef,
      inlineLabel,
      ...rest
    } = this.props;

    const { hasFocus } = this.state;
    const icon = findComponent(children, TextInputIconRef);
    const button = findComponent(children, TextInputButtonRef);
    const showOnClear = onClear && value && !isInProgress;
    const showIcon = icon && (!isInProgress || icon.props.align === "left");

    return (
      <Validate
        error={error}
        patterns={patterns}
        required={required}
        value={value}
      >
        {(isValid) => (
          <Base className="ax-input__container" space={space}>
            <InputWrapper
              disabled={disabled}
              hasFocus={hasFocus}
              inlineLabel={inlineLabel}
              invalid={invalid}
              isTarget={isTarget}
              isValid={isValid}
              label={label}
              labelSpace={labelSpace}
              size={size}
              space={space}
              style={style}
              usageHint={usageHint}
              usageHintPosition={usageHintPosition}
              valid={valid}
            >
              {showOnClear && (
                <TextInputIcon align="right" name="cross" onClick={onClear} />
              )}
              {showIcon && icon}
              <Base
                {...rest}
                Component="input"
                baseRef={inputRef}
                className="ax-input"
                disabled={disabled}
                onBlur={this.handleOnBlur.bind(this)}
                onFocus={this.handleOnFocus.bind(this)}
                type={type}
                value={value}
              />
              {isInProgress && (
                <span className="ax-input__progress">
                  <ProgressInfinite sizeRem="1rem" />
                </span>
              )}
            </InputWrapper>
            {button}
          </Base>
        )}
      </Validate>
    );
  }
}
