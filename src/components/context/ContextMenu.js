import React, { Component, PropTypes } from 'react';
import { ContextBox } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ContextMenu.scss');
}

export default class ContextMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
  };

  static defaultProps = {
    width: '14.5rem',
  };

  render() {
    const { children, width, ...rest } = this.props;
    const style = { width };

    return (
      <ContextBox { ...rest } padded={ false } style={ style }>
        <ul className="ax-context-menu">
          { children }
        </ul>
      </ContextBox>
    );
  }
}
