import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Toggle.css';

export default class Toggle extends Component {
  static propTypes = {
    /** Label that is inserted next to the toggle switch */
    children: PropTypes.node,
    /** Disabled control of the switch */
    disabled: PropTypes.bool,
    /** Called when the toggle is toggled/changed */
    onToggle: PropTypes.func.isRequired,
    /** Size of the toggle */
    size: PropTypes.oneOf(['small', 'medium']),
    /** Toggled/checked state of the switch */
    toggled: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    size: 'small',
  };

  render() {
    const { children, disabled, size, toggled, onToggle, ...rest } = this.props;
    const classes = classnames('ax-toggle', `ax-toggle--${size}`, {
      'ax-toggle--enabled': !disabled,
    });

    return (
      <Base Component="label" className={ classes } space="x2">
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
