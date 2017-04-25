import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './DataPoint.css';

export default class DataPoint extends Component {
  static propTypes = {
    borderWidth: PropTypes.number,
    color: PropTypes.oneOf([
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ]).isRequired,
    radius: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  };

  render() {
    const { borderWidth, color, radius, x, y, ...rest } = this.props;
    const classes = classnames('ax-data-point', `ax-data-point--${color}`);

    return (
      <circle { ...rest }
          className={ classes }
          cx={ x }
          cy={ y }
          r={ radius }
          strokeWidth={ borderWidth } />
    );
  }
}
