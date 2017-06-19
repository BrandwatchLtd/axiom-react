import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Bar, Bars } from 'bw-axiom';
import { findBarGroupMax, arrayOfLength } from './utils';

export default class BulletBars extends Component {
  static propTypes = {
    barLabel: PropTypes.number,
    dataSetMax: PropTypes.number.isRequired,
    label: PropTypes.string,
    showBarLabel: PropTypes.bool,
    values: arrayOfLength.bind(null, 2),
  };

  render() {
    const {
      dataSetMax,
      label,
      barLabel,
      showBarLabel,
      values,
      ...rest } = this.props;

    const barGroupMax = values.reduce(findBarGroupMax);

    const maxDataPoint = values[barGroupMax.index];
    const minDataPoint = values[barGroupMax.index === 1 ? 0 : 1];

    const barGroupHeight = (maxDataPoint.value / dataSetMax) * 100;

    const style = {
      height: `${barGroupHeight}%`,
    };

    maxDataPoint.value = 100;
    minDataPoint.value = ((minDataPoint.value / barGroupMax.value) * 100);

    return (
      <Base { ...rest } className="ax-bullet-chart__block">
        <div className="ax-bullet-chart__bars" style={ style }>
          { values.map(({ color, value }) =>
            <div className="ax-bullet-chart__bars-bar" key={ `${color}-div` }>
              <Bars direction="up" label={ label }>
                <Bar
                    color={ color }
                    key={ color }
                    label={ `${barLabel}%` }
                    percent={ value }
                    showLabel={ showBarLabel }/>
              </Bars>
            </div>
                )}
        </div>
      </Base>
    );
  }
}
