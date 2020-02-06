import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Animicon,
  Grid,
  GridCell,
  List,
  ListItem,
  TextInput,
  Validate,
} from '@brandwatch/axiom-components';
import { translate } from '@brandwatch/axiom-localization';
import { listToSentence } from '@brandwatch/axiom-utils';

const t = translate({
  '1 non-alphanumeric character (e.g. !#%,+-/)': {
    de: '1 Sonderzeichen (z.B. !#%,+-/)',
    es: '1 caracter no alfanumérico (ej. !#%,+-/)',
    fr: '1 caractère non alphanumérique (e.g. !#%,+-/)',
  },
  '1 numeric character': {
    de: '1 Zahl',
    es: '1 caracter numérico',
    fr: '1 caractère numérique',
  },
  '1 uppercase character': {
    de: '1 Großbuchstabe',
    es: '1 caracter en mayúscula',
    fr: '1 caractère majuscule',
  },
  '8 characters': {
    de: '8 Zeichen',
    es: '8 caracteres',
    fr: '8 caractères',
  },
  'at least 8 characters': {
    de: 'mindestens 8 Zeichen',
    es: 'al menos 8 caracteres',
    fr: 'au moins 8 characters',
  },
  'Create new password': {
    de: 'Neues Passwort erstellen',
    es: 'Crear nueva contraseña',
    fr: 'Créez votre nouveau mot de passe',
  },
  'Sorry, your new password must include': {
    de: 'Entschuldigen Sie bitte Ihr neues Passwort',
    es: 'Lo sentimos que su nueva contraseña debe incluir',
    fr: 'Désolé, votre nouveau mot de passe doit inclure',
  },
});

export default class NewPasswordInput extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  render() {
    const { axiomLanguage } = this.context;
    const { value, ...rest } = this.props;

    const validations = [{
      error: t('at least 8 characters', axiomLanguage),
      hint: t('8 characters', axiomLanguage),
      pattern: /^.{8,}$/,
    }, {
      error: t('1 numeric character', axiomLanguage),
      hint: t('1 numeric character', axiomLanguage),
      pattern: /^.*[0-9].*$/,
    }, {
      error: t('1 uppercase character', axiomLanguage),
      hint: t('1 uppercase character', axiomLanguage),
      pattern: /^.*[A-Z].*$/,
    }, {
      error: t('1 non-alphanumeric character (e.g. !#%,+-/)', axiomLanguage),
      hint: t('1 non-alphanumeric character (e.g. !#%,+-/)', axiomLanguage),
      pattern: /^.*[^a-zA-Z\d:].*$/,
    }];

    const validationsColumns = [
      validations.filter((_, idx) => idx < validations.length / 2),
      validations.filter((_, idx) => idx >= validations.length / 2),
    ];

    const getValidationError = (invalidations) =>
      listToSentence(invalidations.map((invalidPattern) =>
        validations.find(({ pattern }) => pattern === invalidPattern).error
      ), `${t('Sorry, your new password must include', axiomLanguage)} `);

    return (
      <Validate
          error={ getValidationError }
          key="newPassword"
          patterns={ validations.map(({ pattern }) => pattern) }
          required
          value={ value }>
        { (valid, hasMetRequired, hasMetPattern) => [
          <TextInput { ...rest }
              invalid={ !valid }
              key="input"
              label={ t('Create new password', axiomLanguage) }
              type="password"
              value={ value } />,

          <Grid
              horizontalGutters="large"
              key="hints"
              responsive={ false }
              space="x3"
              verticalGutters="tiny">
            { validationsColumns.map((validations, index) =>
              <GridCell key={ index } shrink>
                <List style="none" textColor="subtle">
                  { validations.map(({ hint, pattern }, index) =>
                    <ListItem key={ index } space="x2">
                      { hint }
                      <Animicon
                          inline
                          isIn={ hasMetPattern(pattern) }
                          name="tick"
                          spaceLeft="x1"
                          textColor="success" />
                    </ListItem>
                  ) }
                </List>
              </GridCell>
            ) }
          </Grid>,
        ] }
      </Validate>
    );
  }
}
