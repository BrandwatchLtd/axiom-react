import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './Console.css';

export default class Console extends Component {
  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
  };

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, isVisible, ...rest } = this.props;
    const { consoleWidth } = this.context;
    const style = { width: consoleWidth };
    const classes = classnames('ax-platform__console', {
      'ax-platform__console--visible': isVisible,
    });

    return (
      <div { ...rest } className={ classes } style={ style }>
        { children }
      </div>
    );
  }
}
