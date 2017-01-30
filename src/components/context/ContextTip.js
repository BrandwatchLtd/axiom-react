import React, { Component, PropTypes } from 'react';
import { ContextBox } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ContextMenu.scss');
}

export default class ContextTip extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ContextBox { ...rest } padding="small">
        { children }
      </ContextBox>
    );
  }
}
