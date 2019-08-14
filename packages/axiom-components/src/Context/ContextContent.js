import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class ContextContent extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    hasFullSeparator: PropTypes.bool,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    padding: PropTypes.oneOf(['none', 'tiny', 'small', 'medium', 'large']),
    paddingHorizontal: PropTypes.oneOf(['none', 'tiny', 'small', 'medium', 'large']),
    paddingVertical: PropTypes.oneOf(['none', 'tiny', 'small', 'medium', 'large']),
  };

  static defaultProps = {
    hasFullSeparator: false,
    padding: 'large',
  };

  render() {
    const {
      color,
      children,
      className,
      hasFullSeparator,
      height,
      maxHeight,
      padding,
      paddingHorizontal = padding,
      paddingVertical = padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'ax-context-content',
      `ax-context-content--padding-horizontal-${paddingHorizontal}`,
      `ax-context-content--padding-vertical-${paddingVertical}`,
      {
        [`ax-context-content--${color}`]: color,
        'ax-context-content--full-separator': hasFullSeparator,
        'ax-context-content--scrollable': height || maxHeight,
      }
    );

    return (
      <Base { ...rest } className={ classes }>
        <div className="ax-context-content__scroll" style={ { height, maxHeight } }>
          { children }
        </div>
      </Base>
    );
  }
}
