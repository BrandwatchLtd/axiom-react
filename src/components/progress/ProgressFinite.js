import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getArcProperties } from './utils';
import RadialProgress from './RadialProgress';
import './ProgressFinite.css';
import renderFilter from './_filter';

export default class ProgressFinite extends Component {
  static propTypes = {
    /** Percentage of progress complete */
    percent: PropTypes.number.isRequired,
    /** Size of the indicator */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Size in REM units */
    sizeRem: PropTypes.string,
  };

  static defaultProps = {
    percent: 0,
    size: 'small',
  }

  componentWillMount = renderFilter

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
