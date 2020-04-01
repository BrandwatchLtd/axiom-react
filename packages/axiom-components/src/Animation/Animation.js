import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import classnames from 'classnames';

import './Animation.css';

export default class Animation extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.oneOf([
      'fade-in-right',
      'fade-in-down',
      'fade-in-left',
      'fade-in-up',
    ]),
    timingFunction: PropTypes.oneOf([
      'ease-in',
      'ease-out',
      'ease-in-out',
      'linear',
    ]),
    toggled: PropTypes.bool,
  };

  static defaultProps = {
    name: 'fade-in-right',
    timingFunction: 'ease-out',
    toggled: false,
  };

  render() {
    const { children, name, timingFunction, toggled } = this.props;

    const classes = classnames(`ax-animation-wrapper__${name}`, {
      [`ax-animation-wrapper__timing-function--${timingFunction}`]: timingFunction,
      [`ax-animation-wrapper__${name}--toggled`]: toggled,
    });

    return <Base className={classes}>{children}</Base>;
  }
}
