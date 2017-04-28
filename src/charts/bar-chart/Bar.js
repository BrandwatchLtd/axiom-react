import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Small } from 'bw-axiom';
import classnames from 'classnames';
import './Bar.css';

export default class Bar extends Component {
  static propTypes = {
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
    percentage: PropTypes.number.isRequired,
  };

  render() {
    const {
      color,
      percentage,
      ...rest
    } = this.props;

    const classes = classnames('ax-bar-chart__bar-rect', {
      [`ax-bar-chart__bar-rect--${color}`]: color,
    });

    const style = {
      flexBasis: `${percentage}%`,
    };

    return (
      <div { ...rest } className="ax-bar-chart__bar-container">
        <div className="ax-bar-chart__bar">
          <div className="ax-bar-chart__bar-label">
            <Small textColor="subtle">{ percentage }%</Small>
          </div>
          <div className={ classes } style={ style }></div>
        </div>
      </div>
    );
  }
}