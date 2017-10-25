import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import Validation from '../validation/Validation';
import './Form.css';

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * A function called with form event and an error if validation
     * is present.
     *
     * @param {object} event Standard event form object
     * @param {string|null} error Error from Validation if present otherwise null.
     */
    onSubmit: PropTypes.func,
    /** See Validation[requiredError] */
    requiredError: PropTypes.string,
  };

  handleSubmit(event, getUpdatedValidation) {
    const { onSubmit } = this.props;
    const error = getUpdatedValidation();

    if (onSubmit) {
      onSubmit(event, error);
    }
  }

  render() {
    const { children, requiredError, ...rest } = this.props;

    return (
      <Validation requiredError={ requiredError }>
        { (getUpdatedValidation) =>
          <Base { ...rest }
              Component="form"
              className="ax-form"
              onSubmit={ (e) => this.handleSubmit(e, getUpdatedValidation) }>
            { children }
          </Base>
        }
      </Validation>
    );
  }
}
