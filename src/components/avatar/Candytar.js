import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './_filter';

if (__INCLUDE_CSS__) {
  require('./Candytar.scss');
}

function defaultPickerFn(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

const colors = [
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
];

export default class Candytar extends Component {
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
    ]),
    picker: PropTypes.func,
    size: PropTypes.string.isRequired,
  };

  static defaultProps = {
    picker: defaultPickerFn,
  };

  render() {
    const { picker, color = picker(colors), size } = this.props;
    const style = { height: size, width: size };
    const classes = classnames('ax-candytar', `ax-candytar--${color}`);

    /* eslint-disable max-len */
    return (
      <svg className={ classes } style={ style } viewBox="0 0 32 32">
        <circle className="ax-candytar__background" cx="16" cy="16" r="16"></circle>
        <path
            className="ax-candytar__body"
            d="M16,20 C12.1340068,20 9,16.8659932 9,13 C9,9.13400675 12.1340068,6 16,6 C19.8659932,6 23,9.13400675 23,13 C23,16.8659932 19.8659932,20 16,20 Z M6,28.4693659 L6,28.4693659 C7.72660626,24.654283 11.5666365,22 16.0266078,22 C20.486579,22 24.3266093,24.654283 26.0532155,28.4693659 C23.3099448,30.6780366 19.8226569,32 16.0266078,32 C12.2305587,32 8.74327068,30.6780366 6,28.4693659 Z"
            filter="url(#ax-candytar__filter)"></path>
      </svg>
    );
    /* eslint-enable max-len */
  }
}
