import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class CanvasHeader extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
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
