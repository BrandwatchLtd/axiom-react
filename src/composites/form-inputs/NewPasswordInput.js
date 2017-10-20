import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Animicon from '../../components/icon/Animicon';
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import TextInput from '../../components/form/TextInput';
import Validate from '../../components/validation/Validate';
import t from '../../utils/locales';
import listToSentence from '../../utils/listToSentence';

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
      error: t(axiomLanguage, '8-characters-error'),
      hint: t(axiomLanguage, '8-characters'),
      pattern: /^.{8,}$/,
    }, {
      error: t(axiomLanguage, '1-numeric-character-error'),
      hint: t(axiomLanguage, '1-numeric-character'),
      pattern: /^.*[0-9].*$/,
    }, {
      error: t(axiomLanguage, '1-uppercase-character-error'),
      hint: t(axiomLanguage, '1-uppercase-character'),
      pattern: /^.*[A-Z].*$/,
    }, {
      error: t(axiomLanguage, '1-non-alphanumeric-character-error'),
      hint: t(axiomLanguage, '1-non-alphanumeric-character'),
      pattern: /^.*[^a-zA-Z\d:].*$/,
    }];

    const validationsColumns = [
      validations.filter((_, idx) => idx < validations.length / 2),
      validations.filter((_, idx) => idx >= validations.length / 2),
    ];

    const getValidationError = (invalidations) =>
      listToSentence(invalidations.map((invalidPattern) =>
        validations.find(({ pattern }) => pattern === invalidPattern).error
      ), `${t(axiomLanguage, 'password-must-include')} `);

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
              label={ t(axiomLanguage, 'create-new-password') }
              space="x2"
              type="password"
              value={ value } />,

          <Grid
              horizontalGutters="large"
              key="hints"
              responsive={ false }
              space="x4"
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
