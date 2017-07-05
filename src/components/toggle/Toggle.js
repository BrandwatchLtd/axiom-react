import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './Toggle.css';

export default class Toggle extends Component {
  static propTypes = {
    /** Label that is inserted next to the toggle switch */
    children: PropTypes.node,
    /** Toggled/checked state of the switch */
    toggled: PropTypes.bool.isRequired,
    /** Called when the toggle is toggled/changed */
    onToggle: PropTypes.func.isRequired,
  }

  render () {
    const { children, toggled, onToggle, ...rest } = this.props;

    return (
      <Base Component="label" className="ax-toggle" space="tiny">
        { children && (
          <span className="ax-toggle__label">
            { children }
          </span>
        ) }

        <span className="ax-toggle__switch">
          <input { ...rest }
              checked={ toggled }
              className="ax-toggle__input"
              onChange={ onToggle }
              type="checkbox" />
          <span className="ax-toggle__appearance" />
        </span>
      </Base>
    );
  }
}
