import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class ConsoleMenuItem extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** Active state, resulting in an active appearance */
    active: PropTypes.bool,
    /** Content inserted into the menu item */
    children: PropTypes.node,
    /** Applying disabled state and preventing interactions */
    disabled: PropTypes.bool,
  };

  render() {
    const { active, children, disabled, ...rest } = this.props;
    const classes = classnames('ax-console-menu__item', {
      'ax-console-menu__item--active': active,
      'ax-console-menu__item--disabled': disabled,
    });

    return (
      <Base { ...rest }
          Component="li"
          className={ classes }
          textColor={ (disabled && 'disabled') || (!active && 'subtle') || null }
          textSize="small"
          textStrong={ active }>
        { children }
      </Base>
    );
  }
}
