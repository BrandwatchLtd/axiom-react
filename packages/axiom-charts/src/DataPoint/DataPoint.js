import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { VB_HEIGHT } from './DataPoints';

const HOLLOW_STROKE_WIDTH = 4;

export default class DataPoint extends Component {
  static propTypes = {
    /** Background color of the DataPoint */
    color: PropTypes.oneOf([
      'tiny-clanger',
      'critical-mass',
      'paradise-lost',
      'serene-sea',
      'giant-leap',
      'moon-lagoon',
      'terra-form',
      'primeval-soup',
      'new-horizon',
      'blast-off',
      'ground-control',
      'luna-dust',
    ]).isRequired,
    /** SKIP */
    r: PropTypes.number,
    /** Style of the DataPoint */
    style: PropTypes.oneOf(['hollow', 'solid']),
  };

  static defaultProps = {
    style: 'solid',
  };

  render() {
    const { color, style, r, ...rest } = this.props;
    const classes = classnames(
      'ax-data-point',
      `ax-data-point--${color}`,
      `ax-data-point--${style}`);

    return (
      <circle { ...rest }
          className={ classes }
          cx={ VB_HEIGHT / 2 }
          cy={ VB_HEIGHT / 2 }
          r={ style === 'solid' ? r : r - (HOLLOW_STROKE_WIDTH / 2) }
          strokeWidth={ HOLLOW_STROKE_WIDTH } />
    );
  }
}
