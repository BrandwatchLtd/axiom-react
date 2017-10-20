import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextInput from '../../components/form/TextInput';
import t from '../../utils/locales';

export default class ConfirmPasswordInput extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  static propTypes = {
    passwordValue: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    const { axiomLanguage } = this.context;
    const { passwordValue, value, ...rest } = this.props;

    return (
      <TextInput { ...rest }
          error={ () => t(axiomLanguage, 'confirmation-doesnt-match') }
          label={ t(axiomLanguage, 'confirm-new-password') }
          patterns={ [(value) => value === passwordValue] }
          required
          space="x6"
          type="password"
          value={ value } />
    );
  }
}
