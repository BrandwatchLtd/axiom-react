import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./Console.scss');
}

export default class Console extends Component {
  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
  };

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, isVisible } = this.props;
    const { consoleWidth } = this.context;
    const style = { width: consoleWidth };
    const classes = classnames('ax-platform__console', {
      'ax-platform__console--visible': isVisible,
    });

    return (
      <div className={ classes } style={ style }>
        { children }
      </div>
    );
  }
}
