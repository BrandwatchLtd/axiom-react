import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class ChartPanelBody extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    horizontalAlign: PropTypes.oneOf(['start', 'middle', 'end']),
    verticalAlign: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
  };

  render() {
    const { horizontalAlign, verticalAlign } = this.props;
    const classes = classnames('ax-chart-panel__body', {
      [`ax-chart-panel__body--vertical-${verticalAlign}`]: verticalAlign,
      [`ax-chart-panel__body--horizontal-${horizontalAlign}`]: horizontalAlign,
    });

    const { children, ...rest } = this.props;

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}
