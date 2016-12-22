import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./Platform.scss');
}

export default class Platform extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    consoleWidth: PropTypes.number.isRequired,
  };

  static childContextTypes = {
    consoleWidth: PropTypes.number.isRequired,
  };

  getChildContext() {
    return {
      consoleWidth: this.props.consoleWidth,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div className="ax-platform">
        { children }
      </div>
    );
  }
}
