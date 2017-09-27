import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Alert,
  Dialog,
  DialogBody,
  DialogHeader,
  Paragraph,
  Heading,
} from 'bw-axiom';
import ChangePasswordForm from './ChangePasswordForm';
import atIds from '../../../at_ids';
import { translate as t } from '../../utils/locales';

export default class ChangePassword extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.oneOf(['en', 'de', 'es', 'fr']),
  };

  static propTypes = {
    /** An error message that will be placed on the page */
    error: PropTypes.string,
    /** Visibility toggle for the Dialog */
    isOpen: PropTypes.bool.isRequired,
    /** Toggles the disabled property on the submit button */
    isSubmitting: PropTypes.bool,
    /**
     * List of rules which the password must fulfill, contains a human friendly
     * label and associated pattern.
     */
    rules: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      pattern: PropTypes.object.isRequired,
    })),
    /** Callback for closing the Dialog by clicking on the overlay */
    onRequestClose: PropTypes.func.isRequired,
    /** Submit handler that will be called with old and new password */
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isSubmitting: false,
    rules: [
      { label: '8-characters', pattern: /^.{8,}$/ },
      { label: '1-numeric-character', pattern: /^.*[0-9].*$/ },
      { label: '1-uppercase-character', pattern: /^.*[A-Z].*$/ },
      { label: '1-non-alphanumeric-character', pattern: /^.*[^a-zA-Z\d:].*$/ },
    ],
  };

  render() {
    const { error, isSubmitting, onRequestClose, onSubmit, rules, ...rest } = this.props;
    const { axiomLanguage } = this.context;

    return (
      <Dialog { ...rest } onRequestClose={ onRequestClose } size="medium">
        <DialogHeader>
          <Heading textSize="headtitle">
            { t(axiomLanguage, 'change-password-title') }
          </Heading>
        </DialogHeader>

        { error && (
          <Alert space="x4" type="error" >
            <Paragraph data-ax-at={ atIds.ChangePassword.error }>
              { error }
            </Paragraph>
          </Alert>
        ) }

        <DialogBody>
          <ChangePasswordForm
              isSubmitting={ isSubmitting }
              onCancel={ onRequestClose }
              onRequestClose={ onRequestClose }
              onSubmit={ onSubmit }
              rules={ rules } />
        </DialogBody>
      </Dialog>
    );
  }
}
