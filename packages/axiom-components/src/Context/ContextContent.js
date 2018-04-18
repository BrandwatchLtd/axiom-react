import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class ContextContent extends Component {
  static propTypes = {
    children: PropTypes.node,
    hasFullSeparator: PropTypes.bool,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    padding: PropTypes.oneOf(['none', 'small', 'large']),
    paddingHorizontal: PropTypes.oneOf(['none', 'small', 'large']),
    paddingVertical: PropTypes.oneOf(['none', 'small', 'large']),
  };

  static defaultProps = {
    hasFullSeparator: false,
    padding: 'large',
  };

  render() {
    const {
      hasFullSeparator,
      height,
      maxHeight,
      padding,
      paddingHorizontal = padding,
      paddingVertical = padding,
      ...rest
    } = this.props;

    const classes = classnames(
      'ax-context-content',
      `ax-context-content--padding-horizontal-${paddingHorizontal}`,
      `ax-context-content--padding-vertical-${paddingVertical}`,
      {
        'ax-context-content--full-separator': hasFullSeparator,
        'ax-context-content--scrollable': maxHeight,
      }
    );

    return (
      <Base { ...rest } className={ classes } style={ { height, maxHeight } } />
    );
  }
}
