import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';

export default class AlertDialogBody extends Component {
  static propTypes = {
    /** The main content for AlertDialog */
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest }
          className="ax-alert-dialog__body"
          textColor="subtle">
        { children }
      </Base>
    );
  }
}
