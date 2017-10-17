import PropTypes from 'prop-types';
import React, { Component } from 'react';
import t from '../../utils/locales';
import Animicon from '../../components/icon/Animicon';
import Form from '../../components/form/Form';
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import TextInput from '../../components/form/TextInput';
import ChangePasswordControls from './ChangePasswordControls';
import listToSentence from '../../utils/listToSentence';
import atIds from '../../../at_ids';

export default class ChangePasswordForm extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  static propTypes = {
    isCurrentPasswordInvalid: PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    onError: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    rules: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      pattern: PropTypes.object.isRequired,
    })),
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      isCurrentPasswordInvalid: false,
      isNewPasswordInvalid: false,
      isConfirmPasswordInvalid: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(key, { target: { value } }) {
    this.setState({ [key]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onSubmit, onError } = this.props;
    const { axiomLanguage } = this.context;
    const { confirmPassword, currentPassword, newPassword } = this.state;
    const isFormFilledOut = confirmPassword && currentPassword && newPassword;
    const invalidRules = this.props.rules.filter(rule => !rule.pattern.test(newPassword));

    this.setState({
      isCurrentPasswordInvalid: false,
      isNewPasswordInvalid: false,
      isConfirmPasswordInvalid: false,
    });

    if (!isFormFilledOut) {
      this.setState({
        isCurrentPasswordInvalid: !currentPassword,
        isNewPasswordInvalid: !newPassword,
        isConfirmPasswordInvalid: !confirmPassword,
      });
      return onError(t(axiomLanguage, 'complete-all-fields'));
    }

    if (invalidRules.length > 0) {
      this.setState({
        isNewPasswordInvalid: true,
      });

      return onError(listToSentence(
        invalidRules.map(({ errorMessage }) => t(axiomLanguage, errorMessage)),
        `${t(axiomLanguage, 'password-must-include')} `
      ));
    }

    if (confirmPassword !== newPassword) {
      this.setState({
        isConfirmPasswordInvalid: true,
      });
      return onError(t(axiomLanguage, 'confirmation-doesnt-match'));
    }

    onSubmit(currentPassword, newPassword);
  }

  render() {
    const {
      onRequestClose,
      rules,
      isSubmitting,
    } = this.props;
    const { axiomLanguage } = this.context;
    const {
      confirmPassword,
      currentPassword,
      isConfirmPasswordInvalid,
      isCurrentPasswordInvalid,
      isNewPasswordInvalid,
      newPassword,
    } = this.state;

    const validatedRules = rules.map(rule => ({
      ...rule,
      valid: rule.pattern.test(newPassword),
    }));

    const colRules = [
      validatedRules.filter((_, idx) => idx < validatedRules.length / 2),
      validatedRules.filter((_, idx) => idx >= validatedRules.length / 2),
    ];

    return (
      <Form onSubmit={ this.handleSubmit }>
        <TextInput
            data-ax-at={ atIds.ChangePassword.currentPassword }
            invalid={ isCurrentPasswordInvalid || this.props.isCurrentPasswordInvalid }
            label={ t(axiomLanguage, 'enter-current-password') }
            onChange={ e => this.handlePasswordChange('currentPassword', e) }
            onFocus={ () => this.setState({ isCurrentPasswordInvalid: false }) }
            space="x6"
            type="password"
            value={ currentPassword } />

        <TextInput
            data-ax-at={ atIds.ChangePassword.newPassword }
            invalid={ isNewPasswordInvalid }
            label={ t(axiomLanguage, 'create-new-password') }
            onChange={ e => this.handlePasswordChange('newPassword', e) }
            onFocus={ () => this.setState({ isNewPasswordInvalid: false }) }
            space="x2"
            type="password"
            value={ newPassword } />

        <Grid horizontalGutters="large" responsive={ false } space="x4" verticalGutters="tiny">
          { colRules.map((validatedRules, id) => (
            <GridCell key={ id } shrink>
              <List style="none" textColor="subtle">
                { validatedRules.map(({ label, valid }, id) => (
                  <ListItem key={ id } space="x2">
                    { t(axiomLanguage, label) }
                    <Animicon
                        inline
                        isIn={ valid }
                        name="tick"
                        spaceLeft="x1"
                        textColor="success" />
                  </ListItem>
                ) ) }
              </List>
            </GridCell>
          ) ) }
        </Grid>

        <TextInput
            data-ax-at={ atIds.ChangePassword.confirmPassword }
            id="confirm-password"
            invalid={ isConfirmPasswordInvalid }
            label={ t(axiomLanguage, 'confirm-new-password') }
            onChange={ e => this.handlePasswordChange('confirmPassword', e) }
            onFocus={ () => this.setState({ isConfirmPasswordInvalid: false }) }
            space="x6"
            type="password"
            value={ confirmPassword } />

        <ChangePasswordControls
            isSubmitDisabled={ isSubmitting }
            onCancel={ onRequestClose }
            onSubmit={ this.handleSubmit } />
      </Form>
    );
  }
}
