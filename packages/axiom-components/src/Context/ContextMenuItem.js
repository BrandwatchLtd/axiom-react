import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Base from '../Base/Base';
import ContextMenuItemMulti from './ContextMenuItemMulti';
import ContextMenuItemSingle from './ContextMenuItemSingle';

/* eslint-disable react/no-find-dom-node */
export default class ContextMenuItem extends Component {
  static propTypes = {
    /** Content inserted into the menu item */
    children: PropTypes.node,
    /** Disabled state, causing it to be unclickable */
    disabled: PropTypes.bool,
    /** Whether the menu item is keyboard control focused */
    focused: PropTypes.bool,
    /** Whether the menu is part of a multi-selection menu */
    multiSelect: PropTypes.bool,
    /** Click handler */
    onClick: PropTypes.func,
    /** Selected state, resulting in a selected appearance */
    selected: PropTypes.bool,
  };

  static contextTypes = {
    scrollIntoView: PropTypes.func,
  }

  componentDidUpdate(prevProps) {
    const { scrollIntoView } = this.context;

    if (!scrollIntoView) return;

    if (!prevProps.focused && this.props.focused) {
      scrollIntoView(this.element);
    }
  }

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
          ref={ this.context.scrollIntoView &&
              ((el) => this.element = ReactDOM.findDOMNode(el)) }
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
