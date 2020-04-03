import PropTypes from "prop-types";
import React, { Component } from "react";
import omit from "lodash.omit";
import atIds from "@brandwatch/axiom-automation-testing/ids";
import {
  AlertBar,
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogHeader,
  Form,
  Heading,
  ProgressButton,
  Paragraph,
} from "@brandwatch/axiom-components";
import { translate } from "@brandwatch/axiom-localization";
import ConfirmPasswordInput from "../FormInputs/ConfirmPasswordInput";
import CurrentPasswordInput from "../FormInputs/CurrentPasswordInput";
import NewPasswordInput from "../FormInputs/NewPasswordInput";

const t = translate({
  "Change Password": {
    de: "Passwort ändern",
    es: "Cambiar Contraseña",
    fr: "Changement de votre mot de passe",
  },
  "Please complete all the password fields": {
    de: "Es tut uns leid, Sie müssen alle Passwortfelder ausfüllen",
    es: "Lo sentimos, debe completar todos los campos de contraseña",
    fr: "Désolé, vous devez compléter tous les champs de mot de passe",
  },
  Cancel: {
    de: "Abbrechen",
    es: "Cancelar",
    fr: "Effacer",
  },
});

export default class ChangePasswordDialog extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  static propTypes = {
    /** An error message that will be placed on the page */
    error: PropTypes.string,
    /** Allows error styles to be applied to the current password text box manually */
    isCurrentPasswordInvalid: PropTypes.bool,
    /** Visibility toggle for the Dialog */
    isOpen: PropTypes.bool.isRequired,
    /** Toggles the disabled property on the submit button */
    isSubmitting: PropTypes.bool,
    /** Callback for closing the Dialog by clicking on the overlay */
    onRequestClose: PropTypes.func.isRequired,
    /** Submit handler that will be called with old and new password */
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isCurrentPasswordInvalid: false,
    isSubmitting: false,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      confirmPassword: "",
      currentPassword: "",
      validationError: "",
      newPassword: "",
    };
  }

  handleSubmit(event, validationError) {
    const { onSubmit } = this.props;
    const { currentPassword, newPassword } = this.state;

    event.preventDefault();
    this.setState({ validationError });

    if (!validationError) {
      onSubmit({ currentPassword, newPassword });
    }
  }

  render() {
    const { axiomLanguage } = this.context;
    const {
      error,
      isCurrentPasswordInvalid,
      isSubmitting,
      onRequestClose,
      ...rest
    } = this.props;
    const {
      confirmPassword,
      currentPassword,
      newPassword,
      validationError,
    } = this.state;

    return (
      <Dialog
        {...omit(rest, ["onSubmit"])}
        onRequestClose={onRequestClose}
        size="medium"
      >
        <DialogHeader>
          <Heading textSize="headtitle">
            {t("Change Password", axiomLanguage)}
          </Heading>
        </DialogHeader>

        <Form
          onSubmit={this.handleSubmit}
          requiredError={t("Please complete all the password fields")}
        >
          {(validationError || error) && (
            <AlertBar type="error">
              <Paragraph data-ax-at={atIds.ChangePassword.error}>
                {validationError || error}
              </Paragraph>
            </AlertBar>
          )}

          <DialogBody>
            <CurrentPasswordInput
              data-ax-at={atIds.ChangePassword.currentPassword}
              invalid={isCurrentPasswordInvalid}
              onChange={(e) =>
                this.setState({ currentPassword: e.target.value })
              }
              value={currentPassword}
            />

            <NewPasswordInput
              data-ax-at={atIds.ChangePassword.newPassword}
              onChange={(e) => this.setState({ newPassword: e.target.value })}
              value={newPassword}
            />

            <ConfirmPasswordInput
              data-ax-at={atIds.ChangePassword.confirmPassword}
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
              passwordValue={newPassword}
              value={confirmPassword}
            />

            <ButtonGroup textRight>
              <Button
                data-ax-at={atIds.ChangePassword.cancel}
                onClick={onRequestClose}
                style="secondary"
                type="button"
              >
                {t("Cancel", axiomLanguage)}
              </Button>
              <ProgressButton
                data-ax-at={atIds.ChangePassword.submit}
                disabled={isSubmitting}
                isInProgress={isSubmitting}
                type="submit"
              >
                {t("Change Password", axiomLanguage)}
              </ProgressButton>
            </ButtonGroup>
          </DialogBody>
        </Form>
      </Dialog>
    );
  }
}
