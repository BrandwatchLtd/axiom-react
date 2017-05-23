import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import { Base, DataPoints, DotPlotLine } from 'bw-axiom';
import './DotPlot.css';

export default class DotPlot extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
  };

  static defaultProps = {
    height: '0.8125rem',
  };

  render() {
    const { children, height, ...rest } = this.props;
    const diameter = parseFloat(height, 10);
    const arrayChildren = Children
      .toArray(children)
      .sort((a, b) => a.props.percent - b.props.percent);
    const xValues = arrayChildren.map(({ props }) => props.percent);
    const x = Math.min(...xValues);
    const range = Math.max(...xValues) - x;
    const style = {
      height: `${diameter}rem`,
      marginLeft: `-${diameter / 2}rem`,
    };

    return (
      <Base { ...rest }
          Component="svg"
          className="ax-dot-plot"
          style={ style }>
        <DotPlotLine width={ `${ range }%` } x={ `${ x }%` } />
        { arrayChildren.map((child, index) =>
          <DataPoints
              key={ index }
              preserveAspectRatio="xMinYMin meet"
              size={ height }
              x={ `${child.props.percent}%` } >
            { child }
          </DataPoints>
        ) }
      </Base>
    );
  }
}
