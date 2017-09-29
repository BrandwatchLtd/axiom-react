import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import ContextMenuItemMulti from './ContextMenuItemMulti';
import ContextMenuItemSingle from './ContextMenuItemSingle';
import './ContextMenuItem.css';

export default class ContextMenuItem extends Component {
  static propTypes = {
    /** Content inserted into the menu item */
    children: PropTypes.node,
    /** Disabled state, causing it to be unclickable */
    disabled: PropTypes.bool,
    /** Whether the menu is part of a multi-selection menu */
    multiSelect: PropTypes.bool,
    /** Selected state, resulting in a selected appearance */
    selected: PropTypes.bool,
    /** Click handler */
    onClick: PropTypes.func,
  };

  render() {
    const {
      disabled,
      multiSelect,
      onClick,
      selected,
      ...rest
    } = this.props;

    return (
      <Base
          Component="li"
          className="ax-context-menu__list-item"
          textStrong={ selected }>
        { multiSelect
          ? <ContextMenuItemMulti { ...rest }
              disabled={ disabled }
              onChange={ onClick }
              selected={ selected } />
          : <ContextMenuItemSingle { ...rest }
              disabled={ disabled }
              onClick={ onClick }
              selected={ selected } />
        }
      </Base>
    );
  }
}
