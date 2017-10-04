import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

  constructor(props) {
    super(props);

    this.state = {
      internalError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ currentPassword, newPassword, error }) {
    if (error) {
      return this.setState({ internalError: error });
    }

    this.setState({ internalError: false });
    return this.props.onSubmit({ currentPassword, newPassword });
  }

  render() {
    const { error, isSubmitting, onRequestClose, rules, ...rest } = this.props;
    const { internalError } = this.state;
    const { axiomLanguage } = this.context;

    return (
      <Dialog { ...rest } onRequestClose={ onRequestClose } size="medium">
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
              isSubmitting={ isSubmitting }
              onCancel={ onRequestClose }
              onRequestClose={ onRequestClose }
              onSubmit={ this.handleSubmit }
              rules={ rules } />
        </DialogBody>
      </Dialog>
    );
  }
}
