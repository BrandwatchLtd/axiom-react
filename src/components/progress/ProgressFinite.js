import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getArcProperties } from './utils';
import RadialProgress from './RadialProgress';
import './ProgressFinite.css';
import './_filter';

export default class ProgressFinite extends Component {

  static propTypes = {
    percent: PropTypes.number.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    percent: 0,
    size: 'small',
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
      <RadialProgress { ...rest } className="ax-progress-finite" diameter={ diameter }>
        <circle
            className="ax-progress-finite__background"
            r={ innerRadius }
            style={ { strokeWidth } } />
        <circle
            className="ax-progress-finite__arc"
            r={ innerRadius }
            style={ { strokeDasharray, strokeDashoffset, strokeWidth } } />
      </RadialProgress>
    );
  }
}
