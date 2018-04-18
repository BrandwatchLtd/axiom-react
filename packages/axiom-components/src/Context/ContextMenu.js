import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextContent from './ContextContent';

export default class ContextMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextContent { ...rest } padding="none">
        <div className="ax-context-menu">
          { children }
        </div>
      </ContextContent>
    );
  }
}
