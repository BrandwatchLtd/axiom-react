import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextBox from './ContextBox';
import './ContextMenu.css';

export default class ContextMenu extends Component {
  static propTypes = {
    /** Content inserted into the menu, ideally ContextMenuItem */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextBox { ...rest } padding="none">
        <ul className="ax-context-menu">
          { children }
        </ul>
      </ContextBox>
    );
  }
}
