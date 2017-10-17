import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import Alert from '../../components/alert/Alert';
import Dialog from '../../components/dialog/Dialog';
import DialogBody from '../../components/dialog/DialogBody';
import DialogHeader from '../../components/dialog/DialogHeader';
import Heading from '../../components/typography/Heading';
import Paragraph from '../../components/typography/Paragraph';
import ChangePasswordForm from './ChangePasswordForm';
import atIds from '../../../at_ids';
import t from '../../utils/locales';

export default class ChangePassword extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  static propTypes = {
    /** An error message that will be placed on the page */
    error: PropTypes.string,
    /** Allows error styles to be applied to the current password text box manually */
    isCurrentPasswordInvalid:  PropTypes.bool,
    /** Visibility toggle for the Dialog */
    isOpen: PropTypes.bool.isRequired,
    /** Toggles the disabled property on the submit button */
    isSubmitting: PropTypes.bool,
    /** Callback for closing the Dialog by clicking on the overlay */
    onRequestClose: PropTypes.func.isRequired,
    /** Submit handler that will be called with old and new password */
    onSubmit: PropTypes.func.isRequired,
    /**
     * List of rules which the password must fulfill, contains a human friendly
     * label and associated pattern.
     */
    rules: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      pattern: PropTypes.object.isRequired,
    })),
  };

  static defaultProps = {
    isCurrentPasswordInvalid: false,
    isSubmitting: false,
    rules: [
      {
        errorMessage: '8-characters-error',
        label: '8-characters',
        pattern: /^.{8,}$/,
      },
      {
        errorMessage: '1-numeric-character-error',
        label: '1-numeric-character',
        pattern: /^.*[0-9].*$/,
      },
      {
        errorMessage: '1-uppercase-character-error',
        label: '1-uppercase-character',
        pattern: /^.*[A-Z].*$/,
      },
      {
        errorMessage: '1-non-alphanumeric-character-error',
        label: '1-non-alphanumeric-character',
        pattern: /^.*[^a-zA-Z\d:].*$/,
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      internalError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(errorMessage) {
    this.setState({ internalError: errorMessage });
  }

  handleSubmit(currentPassword, newPassword) {
    this.setState({ internalError: false });
    this.props.onSubmit({ currentPassword, newPassword });
  }

  render() {
    const {
      error,
      isCurrentPasswordInvalid,
      isSubmitting,
      onRequestClose,
      rules,
      ...rest
    } = this.props;
    const { internalError } = this.state;
    const { axiomLanguage } = this.context;

    return (
      <Dialog { ...omit(rest, ['onSubmit']) } onRequestClose={ onRequestClose } size="medium">
        <DialogHeader>
          <Heading textSize="headtitle">
            { t(axiomLanguage, 'change-password-title') }
          </Heading>
        </DialogHeader>

        { (internalError || error) && (
          <Alert type="error">
            <Paragraph data-ax-at={ atIds.ChangePassword.error }>
              { internalError || error }
            </Paragraph>
          </Alert>
        ) }

        <DialogBody>
          <ChangePasswordForm
              isCurrentPasswordInvalid={ isCurrentPasswordInvalid }
              isSubmitting={ isSubmitting }
              onCancel={ onRequestClose }
              onError={ this.handleError }
              onRequestClose={ onRequestClose }
              onSubmit={ this.handleSubmit }
              rules={ rules } />
        </DialogBody>
      </Dialog>
    );
  }
}
