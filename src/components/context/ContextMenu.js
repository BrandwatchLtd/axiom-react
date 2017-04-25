import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ContextBox } from 'bw-axiom';
import './ContextMenu.css';

export default class ContextMenu extends Component {
  static propTypes = {
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
