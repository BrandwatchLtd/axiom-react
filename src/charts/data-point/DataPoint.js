import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { VB_HEIGHT } from './DataPoints';

export default class DataPoint extends Component {
  static propTypes = {
    /** Background color of the DataPoint */
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
  };

  render() {
    const { color, ...rest } = this.props;
    const classes = classnames('ax-data-point', `ax-data-point--${color}`);

    return (
      <circle { ...rest }
          className={ classes }
          cx={ VB_HEIGHT / 2 }
          cy={ VB_HEIGHT / 2 } />
    );
  }
}
