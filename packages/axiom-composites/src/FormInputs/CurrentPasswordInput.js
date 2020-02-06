import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput } from '@brandwatch/axiom-components';
import { translate } from '@brandwatch/axiom-localization';

const t = translate({
  'Enter current password': {
    de: 'Bisheriges Passwort eingeben',
    es: 'Ingresar contraseña actual',
    fr: 'Entrez votre mot de passe',
  },
});

export default class CurrentPasswordInput extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  static propTypes = {
    invalid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    const { axiomLanguage } = this.context;
    const { invalid, value, ...rest } = this.props;

    return (
      <TextInput { ...rest }
          invalid={ invalid }
          label={ t('Enter current password', axiomLanguage) }
          required
          space="x8"
          type="password"
          value={ value } />
    );
  }
}
