import React, { Component, PropTypes } from 'react';
import { getArcProperties } from './utils';
import RadialProgress from './RadialProgress';
import './_filter';

if (__INCLUDE_CSS__) {
  require('./ProgressFinite.scss');
}

export default class ProgressFinite extends Component {

  static propTypes = {
    percent: PropTypes.number.isRequired,
  };

  static defaultProps = {
    percent: 0,
  }

  render() {
    const {
      percent,
      ...rest
    } = this.props;

    const {
      diameter,
      innerRadius,
      strokeWidth,
      strokeDasharray,
      strokeDashoffset,
    } = getArcProperties({ percent });

    return (
      <RadialProgress { ...rest } className="ax-progress-finite">
        <svg viewBox={ `0 0 ${ diameter } ${ diameter }` }>
          <g transform={ `translate(${ diameter / 2 }, ${ diameter / 2 }) rotate(-90)` }>
            <circle
                className="ax-progress-finite__background"
                r={ innerRadius }
                style={ { strokeWidth } } />
            <circle
                className="ax-progress-finite__arc"
                r={ innerRadius }
                style={ { strokeDasharray, strokeDashoffset, strokeWidth } } />
          </g>
        </svg>
      </RadialProgress>
    );
  }
}
