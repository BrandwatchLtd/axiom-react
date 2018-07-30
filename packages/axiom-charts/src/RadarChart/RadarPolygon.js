import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

export default class RadarPolygon extends Component {
  static propTypes = {
    border: PropTypes.bool,
    color: PropTypes.oneOf([
      'subtle',
      'overlay-light',
      'overlay-heavy',
      'forbidden-planet',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'event-horizon',
      'electric-dreams',
      'outer-limits',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'extraterrestrial',
      'terra-form',
      'primeval-soup',
      'future-shock',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'solar-rust',
      'ground-control',
      'space-oddity',
      'rocky-planet',
      'deep-thought',
      'luna-dust',
      'sentiment-positive',
      'sentiment-negative',
      'sentiment-neutral',
      'social-twitter',
      'social-facebook',
      'social-instagram',
    ]).isRequired,
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    faded: PropTypes.bool,
    fill: PropTypes.bool,
    lower: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    ticks: PropTypes.arrayOf(PropTypes.number).isRequired,
    upper: PropTypes.number.isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  render() {
    const {
      border,
      color,
      cx,
      cy,
      faded,
      fill,
      lower,
      radius,
      ticks,
      upper,
      values,
    } = this.props;

    const classes = classnames('ax-radar__polygon', `ax-radar__polygon--${color}`, {
      'ax-radar__polygon--border': border,
      'ax-radar__polygon--faded': faded,
      'ax-radar__polygon--fill': fill,
    });

    const plot = (v) => ((v - lower) / (upper - lower)) * radius;
    const x = (i) => cx + Math.cos(ticks[i]) * plot(values[i]);
    const y = (i) => cy + Math.sin(ticks[i]) * plot(values[i]);
    const moveTo = (i) => `M ${x(i)},${y(i)}`;
    const lineTo = (d, i) => `${d} L ${x(i)},${y(i)}`;
    const lineEnd = (d) => `${lineTo(d, 0)} Z`;
    const path = lineEnd(values.reduce((d, _, i) => lineTo(d, i), moveTo(0)));

    return (
      <path className={ classes } d={ path } />
    );
  }
}
