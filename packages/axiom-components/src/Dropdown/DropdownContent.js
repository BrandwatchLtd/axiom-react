import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextContent from '../Context/ContextContent';

export default class DropdownContent extends Component {
  static propTypes = {
    /** Determines whether the separator below this context box should cut through the padding */
    hasFullSeparator: PropTypes.bool,
    /** Set height for the content area, box will remain at this height */
    height: PropTypes.string,
    /** Maximum height for the content area, exceeding this will make it scrollable */
    maxHeight: PropTypes.string,
    /** Padding size applied to the content area */
    padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
    /** Horizontal padding size applied to the content area */
    paddingHorizontal: PropTypes.oneOf(['none', 'small', 'large']),
    /** Vertical padding size applied to the content area */
    paddingVertical: PropTypes.oneOf(['none', 'small', 'large']),
  };

  render() {
    return <ContextContent {...this.props} />;
  }
}
