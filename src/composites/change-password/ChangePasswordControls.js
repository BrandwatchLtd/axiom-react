import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
} from 'bw-axiom';
import atIds from '../../../at_ids';

export default class ChangePasswordControls extends Component {

  static propTypes = {
    isSubmitDisabled: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit, onCancel, isSubmitDisabled } = this.props;

    return (
      <ButtonGroup textRight>
        <Button
            data-ax-at={ atIds.ChangePassword.cancel }
            onClick={ () => onCancel() }
            style="secondary"
            type="button">
          Cancel
        </Button>
        <Button
            data-ax-at={ atIds.ChangePassword.submit }
            disabled={ isSubmitDisabled }
            onClick={ onSubmit }
            type="submit">
          Change Password
        </Button>
      </ButtonGroup>
    );
  }
}
