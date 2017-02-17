import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ContextBox.scss');
}

export default class ContextBox extends Component {
  static propTypes = {
    arrowRef: PropTypes.func,
    children: PropTypes.node,
    padding: PropTypes.oneOf(['none', 'small', 'large']),
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    theme: PropTypes.string,
    width: PropTypes.string,
  };

  static defaultProps = {
    padding: 'large',
    position: 'top',
    theme: 'light',
    width: '14.5rem',
  };

  render() {
    const { arrowRef, children, position, padding, theme, width, ...rest } = this.props;
    const style = { width };
    const classes = classnames('ax-context-box',
      `ax-context-box--${position}`,
      `ax-context-box--padding-${padding}`,
    );

    return (
      <Base { ...rest } className={ classes } style={ style } theme={ theme }>
        <div className="ax-context-box__content">
          { children }
        </div>

        <span
            className="ax-context-box__arrow"
            ref={ arrowRef } />
      </Base>
    );
  }
}
