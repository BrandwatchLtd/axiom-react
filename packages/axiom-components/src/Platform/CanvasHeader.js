import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class CanvasHeader extends Component {
  static propTypes = {
    separator: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    size: 'large',
  };

  render() {
    const { separator, size, ...rest } = this.props;
    const classes = classnames(
      'ax-platform__canvas-header',
      `ax-platform__canvas-header--${size}`, {
        'ax-platform__canvas-header--separator': separator,
      },
    );

    return (
      <Base { ...rest } className={ classes } />
    );
  }
}
