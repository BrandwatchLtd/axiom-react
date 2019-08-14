import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';

export default class Canvas extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    openConsolePosition: PropTypes.string,
    openConsoleWidth: PropTypes.string,
  };

  render() {
    const { children, ...rest } = this.props;
    const { openConsolePosition, openConsoleWidth } = this.context;
    const style = {
      marginLeft: (openConsolePosition === 'left' && openConsoleWidth),
      marginRight: (openConsolePosition === 'right' && openConsoleWidth),
    };

    return (
      <Base { ...rest }
          className="ax-platform__canvas"
          style={ style }>
        { children }
      </Base>
    );
  }
}
