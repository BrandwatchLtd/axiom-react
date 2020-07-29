import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import Tick from "./Tick";
import Indeterminate from "./Indeterminate";

import "./ChedioButtox.css";

export default function ChedioButtox({
  children,
  className,
  disabled,
  inputType,
  invalid,
  title,
  onClick,
  indeterminate,
  checked,
  ...rest
}) {
  const getMarker = () => {
    if (indeterminate) {
      return <Indeterminate />;
    }

    if (checked) {
      return <Tick />;
    }
  };

  const getAriaChecked = () => {
    if (indeterminate) {
      return "mixed";
    }

    if (checked) {
      return true;
    }

    return false;
  };

  const handleClick =
    onClick &&
    ((e) => {
      if (e.target.tagName !== "INPUT") {
        e.stopPropagation();
        return;
      }
      onClick(e);
    });

  const classes = classnames(className, {
    [`${className}--disabled`]: disabled,
    [`${className}--invalid`]: invalid,
    [`${className}--indeterminate`]: indeterminate,
  });

  return (
    <Base
      Component="label"
      className={classes}
      onClick={handleClick}
      space="x2"
      title={title}
    >
      <input
        {...rest}
        checked={checked}
        className={`${className}__input`}
        disabled={disabled}
        type={inputType}
        aria-checked={getAriaChecked()}
      />

      <span className={`${className}__indicator`}>
        {inputType === "checkbox" && getMarker()}
      </span>
      {children && <span className={`${className}__label`}>{children}</span>}
    </Base>
  );
}

ChedioButtox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  inputType: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
  invalid: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};
