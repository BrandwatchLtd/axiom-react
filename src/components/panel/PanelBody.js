import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import classnames from 'classnames';

export default class PanelBody extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Horizontal alignment of content */
    horizontalAlign: PropTypes.oneOf(['start', 'middle', 'end']),
    /** Vertical alignment of content */
    verticalAlign: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
  };

  render() {
    const { children, horizontalAlign, verticalAlign, ...rest } = this.props;
    const classes = classnames('ax-panel__body', {
      [`ax-panel__body--vertical-${verticalAlign}`]: verticalAlign,
      [`ax-panel__body--horizontal-${horizontalAlign}`]: horizontalAlign,
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
