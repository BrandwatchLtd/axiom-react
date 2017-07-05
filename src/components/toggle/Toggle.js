import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Toggle.css';

export default class Toggle extends Component {
  static propTypes = {
    /** Label that is inserted next to the toggle switch */
    children: PropTypes.node,
    /** Disabled control of the switch */
    disabled: PropTypes.bool,
    /** Toggled/checked state of the switch */
    toggled: PropTypes.bool.isRequired,
    /** Called when the toggle is toggled/changed */
    onToggle: PropTypes.func.isRequired,
  }

  render () {
    const { children, disabled, toggled, onToggle, ...rest } = this.props;
    const classes = classnames('ax-toggle', {
      'ax-toggle--enabled': !disabled,
    });

    return (
      <Base Component="label" className={ classes } space="tiny">
        { children && (
          <span className="ax-toggle__label">
            { children }
          </span>
        ) }

        <span className="ax-toggle__switch">
          <input { ...rest }
              checked={ toggled }
              className="ax-toggle__input"
              disabled={ disabled }
              onChange={ onToggle }
              type="checkbox" />
          <span className="ax-toggle__appearance" />
        </span>
      </Base>
    );
  }
}
