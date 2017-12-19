import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

export default class CanvasHeader extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    size: 'large',
  };

  render() {
    const { size, ...rest } = this.props;
    const classes = classnames(
      'ax-platform__canvas-header',
      `ax-platform__canvas-header--${size}`);

    return (
      <Base { ...rest } className={ classes } />
    );
  }
}
