import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import omit from 'lodash.omit';
import Base from '../base/Base';
import './Platform.css';

export default class Platform extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onConsoleClose: PropTypes.func,
    openConsolePosition: PropTypes.oneOf(['left', 'right']),
    openConsoleWidth: PropTypes.string,
    responsive: PropTypes.bool,
  };

  static childContextTypes = {
    onConsoleClose: PropTypes.func,
    openConsoleWidth: PropTypes.string,
    openConsolePosition: PropTypes.string,
  };

  getChildContext() {
    return {
      onConsoleClose: this.props.onConsoleClose,
      openConsolePosition: this.props.openConsolePosition,
      openConsoleWidth: this.props.openConsoleWidth,
    };
  }

  render() {
    const { responsive, ...rest } = this.props;
    const props = omit(rest, [
      'onConsoleClose',
      'openConsolePosition',
      'openConsoleWidth',
    ]);

    const classes = classnames('ax-platform', {
      'ax-platform--responsive': responsive,
    });

    return (
      <Base { ...props } className={ classes } />
    );
  }
}
