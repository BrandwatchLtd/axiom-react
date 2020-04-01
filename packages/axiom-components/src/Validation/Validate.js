import PropTypes from 'prop-types';
import { Component } from 'react';
import uuid from 'uuid';

export default class Validate extends Component {
  static contextTypes = {
    getValidity: PropTypes.func,
    checkPatternMet: PropTypes.func,
    checkRequiredMet: PropTypes.func,
    registerValidate: PropTypes.func,
    unregisterValidate: PropTypes.func,
  };

  static propTypes = {
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

  constructor(props) {
    super(props);
    this.checkPatternMet = this.checkPatternMet.bind(this);
    this.validationGetter = this.validationGetter.bind(this);
    this.id = uuid();
  }

  UNSAFE_componentWillMount() {
    if (!this.shouldValidate()) return;

    this.context.registerValidate(this.validationGetter, this.id);
  }

  componentWillUnmount() {
    if (!this.shouldValidate()) return;

    this.context.unregisterValidate(this.validationGetter, this.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.required !== this.props.required) {
      if (this.props.required) {
        return this.context.registerValidate(this.validationGetter, this.id);
      }

      return this.context.unregisterValidate(this.validationGetter, this.id);
    }
  }

  checkPatternMet(pattern) {
    return this.context.checkPatternMet(this.id, pattern);
  }

  validationGetter() {
    return {
      error: this.props.error,
      patterns: this.props.patterns,
      required: this.props.required,
      value: this.props.value,
    };
  }

  shouldValidate() {
    return this.props.patterns || this.props.required;
  }

  render() {
    const { children } = this.props;

    if (!this.shouldValidate()) {
      return children();
    }

    const { getValidity, checkRequiredMet } = this.context;

    return children(
      getValidity(this.id),
      checkRequiredMet(this.id),
      this.checkPatternMet
    );
  }
}
