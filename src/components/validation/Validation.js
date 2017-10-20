import PropTypes from 'prop-types';
import { Component } from 'react';

const getRequiredState = ({ required, value }) =>
  !required || (
    value !== undefined &&
    value !== null &&
    (typeof value !== 'string' || value.trim() !== '')
  );

const getPatternsState = ({ patterns, value }) =>
  Array.isArray(patterns) ? patterns.filter((pattern) =>
    (pattern instanceof RegExp && !pattern.test(value)) ||
    typeof pattern === 'function' && !pattern(value)
  ) : [];

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
    this._getters = [];
    this._setters = [];
    this.getUpdatedValidation = this.getUpdatedValidation.bind(this);
    this.getValidity = this.getValidity.bind(this);
    this.checkPatternMet = this.checkPatternMet.bind(this);
    this.checkRequiredMet = this.checkRequiredMet.bind(this);
    this.registerValidate = this.registerValidate.bind(this);
    this.unregisterValidate = this.unregisterValidate.bind(this);
    this.state = {};
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

  registerValidate(getter, setter) {
    this._getters.push(getter);
    this._setters.push(setter);
    this.setState({
      invalidationIndex: this.getFirstInvalidIndex(),
    });

    this.updateIndexes();
  }

  unregisterValidate(getter, setter) {
    const gIndex = this._getters.indexOf(getter);
    const sIndex = this._setters.indexOf(setter);

    this._getters.slice(0, gIndex).concat(this._getters.slice(gIndex + 1));
    this._setters.slice(0, sIndex).concat(this._setters.slice(sIndex + 1 ));

    this.updateIndexes();
  }

  updateIndexes() {
    this._setters.forEach((setter, index) => setter(index));
  }

  getFirstInvalidIndex() {
    if (!this.getOverallRequiredValidity()) return -1;

    const invalidations = this.getAllInvalidations();
    for (let i = 0; i < invalidations.length; i++) {
      if (invalidations[i].length > 0) return i;
    }
    return -1;
  }

  getValidity(index) {
    const { validated, invalidationIndex } = this.state;

    if (!validated) {
      return true;
    }

    if (!this.getOverallRequiredValidity()) {
      return this.checkRequiredMet(index);
    }

    if (index !== invalidationIndex) {
      return true;
    }

    return !this.getInvalidations(index).length;
  }

  getErrorMessage(index) {
    if (!this.getOverallRequiredValidity()) {
      return this.props.requiredError;
    }

    if (index !== -1) {
      const { error } = this._getters[index]();
      if (error) return error(this.getInvalidations(index));
    }

    return null;
  }

  getInvalidations(index) {
    return getPatternsState(this._getters[index]());
  }

  getAllInvalidations() {
    return this._getters.map((_, index) => this.getInvalidations(index));
  }

  getOverallRequiredValidity() {
    return this._getters.every((_, index) => this.checkRequiredMet(index));
  }

  checkPatternMet(index, metPattern) {
    return this.getInvalidations(index).indexOf(metPattern) === -1;
  }

  checkRequiredMet(index) {
    return getRequiredState(this._getters[index]());
  }

  getUpdatedValidation() {
    const invalidationIndex = this.getFirstInvalidIndex();
    const error = this.getErrorMessage(invalidationIndex);

    this.setState({ invalidationIndex, validated: true });

    return error;
  }

  render() {
    return this.props.children(this.getUpdatedValidation);
  }
}
