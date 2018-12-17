import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput } from '@brandwatch/axiom-components';
import { translate } from '@brandwatch/axiom-localization';

const t = translate({
  'Sorry, your password confirmation doesn\'t match': {
    de: 'Entschuldigung, Ihre Passwortbestätigung stimmt nicht überein',
    es: 'Lo sentimos, la confirmación de la contraseña no coincide',
    fr: 'Désolé, votre confirmation de mot de passe ne correspond pas',
  },
  'Confirm new password': {
    de: 'Neues Passwort bestätigen',
    es: 'Confirmar nueva contraseña',
    fr: 'Confirmez votre nouveau mot de passe',
  },
});

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
          error={ () => t('Sorry, your password confirmation doesn\'t match', axiomLanguage) }
          label={ t('Confirm new password', axiomLanguage) }
          patterns={ [(value) => value === passwordValue] }
          space="x8"
          type="password"
          value={ value } />
    );
  }
}
