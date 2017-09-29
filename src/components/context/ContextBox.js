import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import './ContextBox.css';

export default class ContextBox extends Component {
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
      'ax-context-box',
      `ax-context-box--padding-${padding}`,
      {
        'ax-context-box--full-separator': hasFullSeparator,
        'ax-context-box--scrollable': maxHeight,
      }
    );

    return (
      <Base { ...rest } className={ classes } style={ { height, maxHeight } } />
    );
  }
}
