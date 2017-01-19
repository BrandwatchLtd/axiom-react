import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ContextBox.scss');
}

export default class ContextBox extends Component {
  static propTypes = {
    children: PropTypes.node,
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    padded: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  };

  static defaultProps = {
    offset: 'middle',
    padded: true,
    position: 'top',
  };

  render() {
    const { children, offset, padded, position, ...rest } = this.props;
    const classes = classnames('ax-context-box',  `ax-context-box--${position}-${offset}`, {
      'ax-context-box--padded': padded,
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
