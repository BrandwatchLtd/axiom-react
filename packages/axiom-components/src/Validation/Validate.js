import React, { useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import ValidationContext from "./ValidationContext";

export default function Validate({
  error,
  patterns,
  required,
  value,
  children,
}) {
  const {
    getValidity,
    checkPatternMet: contextCheckPatternMet,
    checkRequiredMet,
    registerValidate,
    unregisterValidate,
  } = useContext(ValidationContext);
  const id = useRef(uuid());

  const valueRef = useRef(value);

  useEffect(() => {
    if (!shouldValidate()) return;

    registerValidate(validationGetter, id.current);
    return () => {
      if (!shouldValidate()) return;

      unregisterValidate(validationGetter, id.current);
    };
  }, []);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    console.log("required useEffect");
    if (required) {
      return registerValidate(validationGetter, id.current);
    }

    return () => {
      unregisterValidate(validationGetter, id.current);
    };
  }, [required]);

  const checkPatternMet = (pattern) => {
    console.log("checkPatternMet", pattern);
    return contextCheckPatternMet(id.current, pattern);
  };

  let validationGetter = () => {
    console.log("validationGetter value:", value);
    return {
      error,
      patterns,
      required,
      value: valueRef.current,
    };
  };

  const shouldValidate = () => {
    return patterns || required;
  };

  if (!shouldValidate()) {
    return children();
  }

  return children(
    getValidity(id.current),
    checkRequiredMet(id.current),
    checkPatternMet
  );
}

Validate.propTypes = {
  /**
   * Function that returns React.node type and is provided with information
   * of the validity of the inputs state.
   *
   * @param {bool} isValid Inline validity state for that input
   * @param {bool} hasMetRequired Returns the current required validity
   * @param {function} checkPatternMet Takes a pattern and returns the
   * validity of that pattern
   */
  children: PropTypes.func.isRequired,
  /**
   * Function that given the inputs invalidations, returns an error
   * message which is given by the top level Validator component.
   */
  error: PropTypes.func,
  /**
   * Array of patterns to be run against this input.
   */
  patterns: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.func.isRequired,
      PropTypes.instanceOf(RegExp).isRequired,
    ]).isRequired
  ),
  /** If this is a required field */
  required: PropTypes.bool,
  /** Current value to run against the validations */
  value: PropTypes.any,
};
