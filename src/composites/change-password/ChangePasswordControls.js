import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
} from 'bw-axiom';
import atIds from '../../../at_ids';

export default class ChangePasswordControls extends Component {

  static propTypes = {
    submitDisabled: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit, onCancel, submitDisabled } = this.props;

    return (
      <ButtonGroup textRight>
        <Button
            data-ax-at={ atIds.ChangePassword.cancel }
            onClick={ () => onCancel() } style="secondary">
          Cancel
        </Button>
        <Button
            data-ax-at={ atIds.ChangePassword.submit }
            disabled={ submitDisabled }
            onClick={ onSubmit }>
          Change Password
        </Button>
      </ButtonGroup>
    );
  }
}
