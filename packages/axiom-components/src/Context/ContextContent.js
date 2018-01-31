import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class ContextContent extends Component {
  static propTypes = {
    /** Determines whether the separator below this context box should cut through the padding */
    hasFullSeparator: PropTypes.bool,
    /** Set height for the content area, box will remain at this height */
    height: PropTypes.string,
    /** Maximum height for the content area, exceeding this will make it scrollable */
    maxHeight: PropTypes.string,
    /** Padding size applied to the content area */
    padding: PropTypes.oneOf(['none', 'small', 'large']),
  };

  static defaultProps = {
    hasFullSeparator: false,
    padding: 'large',
  };

  render() {
    const { hasFullSeparator, height, maxHeight, padding, ...rest } = this.props;
    const classes = classnames(
      'ax-context-content',
      `ax-context-content--padding-${padding}`,
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
