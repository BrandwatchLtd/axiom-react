import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertBar from '../AlertBar/AlertBar';
import Strong from '../Typography/Strong';

export default class AlertDropdownHeader extends Component {
  static propTypes = {
    /** Header content inside the AlertDialog, a good place for a title */
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const { closeDropdown, type } = this.context;
    const { children, ...rest } = this.props;

    return (
      <div className="ax-alert-dialog__header">
        <AlertBar { ...rest }
            onRemoveClick={ closeDropdown }
            size="medium"
            type={ type }>
          <Strong>{ children }</Strong>
        </AlertBar>
      </div>
    );
  }
}

