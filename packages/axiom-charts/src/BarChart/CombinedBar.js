import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import Bar from '../Bar/Bar';
import ChartContext from '../ChartContext/ChartContext';
import './CombinedBar.css';

export default class CombinedBar extends Component {
  static propTypes = {
    DropdownContext: PropTypes.func,
    TooltipContext: PropTypes.func,
    benchmarkValue: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    label: PropTypes.node.isRequired,
    onDropdownClose: PropTypes.func.isRequired,
    onDropdownOpen: PropTypes.func.isRequired,
    percent: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const {
      DropdownContext,
      TooltipContext,
      benchmarkValue,
      color,
      data,
      label,
      onDropdownClose,
      onDropdownOpen,
      percent,
      value,
      ...rest
    } = this.props;
    const isStretched = benchmarkValue > percent;

    const stripedBarWidth = isStretched ? benchmarkValue - percent : percent - benchmarkValue;
    const stripedBarStyle = {
      left: isStretched ? `${percent}%` : `${benchmarkValue}%`,
    };

    const stripedBarProps = omit(rest, [
      'onClick',
    ]);

    return (
      <React.Fragment>
        <ChartContext
            DropdownContext={ DropdownContext }
            TooltipContext={ TooltipContext }
            color={ color }
            data={ data }
            label={ label }
            onDropdownClose={ onDropdownClose }
            onDropdownOpen={ () => onDropdownOpen(color) }
            value={ value }>
          <Bar
              color={ color }
              percent={ percent }
              { ...rest } />
        </ChartContext>

        { isStretched && (<div className="ax-bar-chart__combined-bar-diff" style={ stripedBarStyle }>
          <Bar
              color={ color }
              fillMode="striped"
              percent={ stripedBarWidth }
              { ...stripedBarProps } />
        </div>) }
      </React.Fragment>
    );
  }
}
