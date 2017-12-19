import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';

export default class Canvas extends Component {
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
