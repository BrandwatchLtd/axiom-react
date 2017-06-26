import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Bar, Bars } from 'bw-axiom';
import { findBarGroupMax, arrayOfLength } from './utils';

export default class BulletBars extends Component {
  static propTypes = {
    barLabel: PropTypes.number,
    label: PropTypes.string,
    showBarLabel: PropTypes.bool,
    values: arrayOfLength.bind(null, 2),
  };

  render() {
    const {
      label,
      barLabel,
      showBarLabel,
      values,
      ...rest } = this.props;

    const barGroupMax = values.reduce(findBarGroupMax);

    return (
      <Base { ...rest } className="ax-bullet-chart__block">
        <div className="ax-bullet-chart__bars">
          { values.map(({ color, value }) =>
            <div className="ax-bullet-chart__bars-bar" key={ `${color}-div` }>
              <Bars direction="up" label={ label }>
                <Bar
                    color={ color }
                    key={ color }
                    label={ `${barLabel}%` }
                    percent={ value }
                    showLabel={ value === barGroupMax && showBarLabel }/>
              </Bars>
            </div>
                )}
        </div>
      </Base>
    );
  }
}
