import React, { Component, PropTypes } from 'react';
import { ContextBox } from 'bw-axiom';

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
