import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
} from 'bw-axiom';
import { translate as t } from '../../utils/locales';
import atIds from '../../../at_ids';

export default class ChangePasswordControls extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.oneOf(['en', 'de', 'es', 'fr']),
  };

  static propTypes = {
    isSubmitDisabled: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit, onCancel, isSubmitDisabled } = this.props;
    const { axiomLanguage } = this.context;

    return (
      <ButtonGroup textRight>
        <Button
            data-ax-at={ atIds.ChangePassword.cancel }
            onClick={ () => onCancel() }
            style="secondary"
            type="button">
          { t(axiomLanguage, 'cancel-button') }
        </Button>
        <Button
            data-ax-at={ atIds.ChangePassword.submit }
            disabled={ isSubmitDisabled }
            onClick={ onSubmit }
            type="submit">
          { t(axiomLanguage, 'change-password-button') }
        </Button>
      </ButtonGroup>
    );
  }
}
