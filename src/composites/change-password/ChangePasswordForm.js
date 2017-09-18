import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Form,
  Grid,
  GridCell,
  Animicon,
  List,
  ListItem,
  TextInput,
} from 'bw-axiom';
import ChangePasswordControls from './ChangePasswordControls';
import atIds from '../../../at_ids';

export default class ChangePasswordForm extends Component {

  static propTypes = {
    confirmPassword: PropTypes.string.isRequired,
    confirmPasswordValid: PropTypes.bool.isRequired,
    currentPassword: PropTypes.string.isRequired,
    isSubmitDisabled: PropTypes.bool.isRequired,
    newPassword: PropTypes.string.isRequired,
    newPasswordValid: PropTypes.bool.isRequired,
    rules: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      valid: PropTypes.bool.isRequired,
    })),
    onCancel: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      currentPassword,
      newPassword,
      newPasswordValid,
      confirmPassword,
      confirmPasswordValid,
      onCancel,
      onPasswordChange,
      onSubmit,
      rules,
      isSubmitDisabled,
    } = this.props;

    const colRules = [
      rules.filter((_, idx) => idx < rules.length / 2),
      rules.filter((_, idx) => idx >= rules.length / 2),
    ];

    return (
      <Form onSubmit={ onSubmit }>
        <TextInput
            data-ax-at={ atIds.ChangePassword.currentPassword }
            label="Enter current password"
            onChange={ e => onPasswordChange('currentPassword', e) }
            space="x6"
            type="password"
            value={ currentPassword } />

        <TextInput
            data-ax-at={ atIds.ChangePassword.newPassword }
            label="Create new password"
            onChange={ e => onPasswordChange('newPassword', e) }
            space="x2"
            type="password"
            valid={ newPasswordValid }
            value={ newPassword } />

        <Grid horizontalGutters="large" responsive={ false } space="x4" verticalGutters="tiny">
          { colRules.map((rules, id) => (
            <GridCell key={ id } shrink>
              <List style="none" textColor="subtle">
                { rules.map(({ label, valid }, id) => (
                  <ListItem key={ id } space="x2">
                    { label }
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
            label="Confirm new password"
            onChange={ e => onPasswordChange('confirmPassword', e) }
            space="x6"
            type="password"
            valid={ confirmPasswordValid }
            value={ confirmPassword } />

        <ChangePasswordControls
            isSubmitDisabled={ isSubmitDisabled }
            onCancel={ onCancel }
            onSubmit={ onSubmit } />
      </Form>
    );
  }
}
