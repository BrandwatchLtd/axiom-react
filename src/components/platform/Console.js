import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import classnames from 'classnames';
import './Console.css';

export default class Console extends Component {
  static propTypes = {
    children: PropTypes.node,
    isDockless: PropTypes.bool,
    isVisible: PropTypes.bool,
  };

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, isDockless, isVisible, ...rest } = this.props;
    const { consoleWidth } = this.context;
    const style = { width: consoleWidth };
    const classes = classnames('ax-platform__console', {
      'ax-platform__console--visible': isVisible && !isDockless,
      'ax-platform__console--visible-without-dock': isDockless && isVisible,
    });

    return (
      <Base { ...rest } className={ classes } style={ style }>
        { children }
      </Base>
    );
  }
}
