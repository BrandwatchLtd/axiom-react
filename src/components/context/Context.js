import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Context.css';

export default class Context extends Component {
  static propTypes = {
    arrowRef: PropTypes.func,
    children: PropTypes.node,
    maxHeight: PropTypes.string,
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    theme: PropTypes.oneOf(['dark', 'light']),
    width: PropTypes.string,
  };

  static defaultProps = {
    maxHeight: '30rem',
    position: 'top',
    theme: 'light',
    width: '14.5rem',
  };

  render() {
    const {
      arrowRef,
      children,
      maxHeight,
      position,
      theme,
      width,
      ...rest
    } = this.props;

    const classes = classnames('ax-context',
      `ax-context--${position}`,
      `ax-context--${theme}`);

    return (
      <Base { ...rest } className={ classes } style={ { width } }>
        <div className="ax-context__content" style={ { maxHeight } }>
          { children }
        </div>

        <span
            className="ax-context__arrow"
            ref={ arrowRef } />
      </Base>
    );
  }
}
