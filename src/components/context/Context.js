import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Context.css';

export default class Context extends Component {
  static propTypes = {
    arrowRef: PropTypes.func,
    children: PropTypes.node,
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    theme: PropTypes.oneOf(['dark', 'light']),
    width: PropTypes.string,
  };

  static defaultProps = {
    position: 'top',
    theme: 'light',
    width: '14.5rem',
  };

  render() {
    const { arrowRef, children, position, theme, width, ...rest } = this.props;
    const style = { width };
    const classes = classnames('ax-context',
      `ax-context--${position}`,
      `ax-context--${theme}`);

    return (
      <Base { ...rest } className={ classes } style={ style }>
        <div className="ax-context__content">
          { children }
        </div>

        <span
            className="ax-context__arrow"
            ref={ arrowRef } />
      </Base>
    );
  }
}
