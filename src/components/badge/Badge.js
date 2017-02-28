import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Badge.scss');
}

export default class Badge extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['faded', 'highlight', 'success', 'error']),
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
  };

  static defaultProps = {
    color: 'faded',
  };

  render() {
    const {
      children,
      color,
      full,
      ...rest
    } = this.props;

    const classes = classnames('ax-badge', {
      [`ax-badge--${color}`]: color,
      'ax-badge--full': full === true,
      [`ax-badge--full--${full}`]: typeof full === 'string',
    });

    return (
      <Base { ...rest } Component="span" className={ classes }>
        { children }
      </Base>
    );
  }
}
