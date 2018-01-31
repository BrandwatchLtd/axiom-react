import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextContent from './ContextContent';

export default class ContextMenu extends Component {
  static propTypes = {
    /** Content inserted into the menu, ideally ContextMenuItem */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextContent { ...rest } padding="none">
        <ul className="ax-context-menu">
          { children }
        </ul>
      </ContextContent>
    );
  }
}
