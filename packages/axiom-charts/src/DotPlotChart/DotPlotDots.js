import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';

const DOT_PLOT_DIAMETER = 0.8125;

export default class DotPlotDots extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    faded: PropTypes.bool,
    hidden: PropTypes.bool,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { colors, faded, hidden, value, ...rest } = this.props;
    const size = `${DOT_PLOT_DIAMETER}rem`;
    const style = { left: `${value}%` };
    const classes = classnames('ax-dot-plot__dots', {
      'ax-dot-plot__dots--faded': faded,
      'ax-dot-plot__dots--hidden': hidden,
    });

    return (
      <div className={ classes } style={ style }>
        <DataPoints { ...rest }
            data-ax-at={ atIds.DotPlotChart.dot }
            size={ size }>
          { colors.map((color, index) =>
            <DataPoint color={ color } key={ index } />
          ) }
        </DataPoints>
      </div>
    );
  }
}
