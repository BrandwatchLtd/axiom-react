import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./Platform.scss');
}

export default class Platform extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    consoleWidth: PropTypes.string.isRequired,
  };

  static childContextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  getChildContext() {
    return {
      consoleWidth: this.props.consoleWidth,
    };
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <div { ...rest } className="ax-platform">
        { children }
      </div>
    );
  }
}
