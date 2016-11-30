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

  render() {
    const { children, isVisible } = this.props;
    const classes = classnames('ax-platform__console', {
      'ax-platform__console--visible': isVisible,
    });

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}
