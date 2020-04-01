import PropTypes from 'prop-types';
import { Component } from 'react';
import omit from 'lodash.omit';

const getRequiredState = ({ required, value }) =>
  !required ||
  (value !== undefined &&
    value !== null &&
    (typeof value !== 'string' || value.trim() !== ''));

const getPatternsState = ({ patterns, value }) =>
  Array.isArray(patterns)
    ? patterns.filter(
        pattern =>
          (pattern instanceof RegExp && !pattern.test(value)) ||
          (typeof pattern === 'function' && !pattern(value))
      )
    : [];

export default class Validation extends Component {
  static propTypes = {
    /**
     * Function that returns React.node type and is provided with information
     * of the overall validity of all the child Validate's state.
     *
     * @param {function} getUpdatedValidation Returns a boolean of the overall
     * validity.
     * @param {string} error Error message, either for the overall required
     * invalidation, or provided by an individual Validate component.
     */
    children: PropTypes.func.isRequired,
    /** Error to output when required fields have not been met */
    requiredError: PropTypes.string,
  };

  static childContextTypes = {
    getValidity: PropTypes.func.isRequired,
    checkPatternMet: PropTypes.func.isRequired,
    checkRequiredMet: PropTypes.func.isRequired,
    registerValidate: PropTypes.func.isRequired,
    unregisterValidate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.getUpdatedValidation = this.getUpdatedValidation.bind(this);
    this.getValidity = this.getValidity.bind(this);
    this.checkPatternMet = this.checkPatternMet.bind(this);
    this.checkRequiredMet = this.checkRequiredMet.bind(this);
    this.registerValidate = this.registerValidate.bind(this);
    this.unregisterValidate = this.unregisterValidate.bind(this);
    this.state = { validators: {} };
  }

  getChildContext() {
    return {
      getValidity: this.getValidity,
      checkPatternMet: this.checkPatternMet,
      checkRequiredMet: this.checkRequiredMet,
      registerValidate: this.registerValidate,
      unregisterValidate: this.unregisterValidate,
    };
  }

  registerValidate(validationState, id) {
    if (!this.state.validators[id]) {
      this.setState(({ validators }) => ({
        invalidationId: this.getFirstInvalidId(),
        validators: { ...validators, [id]: validationState },
      }));
    }
  }

  unregisterValidate(_, id) {
    if (this.state.validators[id]) {
      this.setState(({ validators }) => ({
        invalidationId: this.getFirstInvalidId(),
        validators: omit(validators, id),
      }));
    }
  }

  getValidity(id) {
    const { validated, invalidationId } = this.state;

    if (!validated) {
      return true;
    }

    if (!this.getOverallRequiredValidity()) {
      return this.checkRequiredMet(id);
    }

    if (id !== invalidationId) {
      return true;
    }

    return !this.getInvalidations(id).length;
  }

  getErrorMessage(id) {
    if (!this.getOverallRequiredValidity()) {
      return this.props.requiredError;
    }

    if (id) {
      const { error } = this.state.validators[id]();
      if (error) return error(this.getInvalidations(id));
    }

    return null;
  }

  getInvalidations(id) {
    return this.state.validators[id]
      ? getPatternsState(this.state.validators[id]())
      : [];
  }

  getFirstInvalidId() {
    const getOverallRequiredValidity = this.getOverallRequiredValidity();
    if (!getOverallRequiredValidity) return;

    const invalidations = this.getAllInvalidations();
    const firstInvalidValidator = Object.keys(invalidations).find(
      id => invalidations[id].length > 0
    );
    return firstInvalidValidator ? firstInvalidValidator : '';
  }

  getAllInvalidations() {
    return Object.keys(this.state.validators).reduce((left, nextId) => {
      return { ...left, [nextId]: this.getInvalidations(nextId) };
    }, {});
  }

  getOverallRequiredValidity() {
    return Object.keys(this.state.validators).every(id =>
      this.checkRequiredMet(id)
    );
  }

  checkPatternMet(id, metPattern) {
    return this.getInvalidations(id).indexOf(metPattern) === -1;
  }

  checkRequiredMet(key) {
    return this.state.validators[key]
      ? getRequiredState(this.state.validators[key]())
      : true;
  }

  getUpdatedValidation() {
    const invalidationId = this.getFirstInvalidId();
    const error = this.getErrorMessage(invalidationId);

    this.setState({ invalidationId, validated: true });

    return error;
  }

  render() {
    return this.props.children(this.getUpdatedValidation);
  }
}
