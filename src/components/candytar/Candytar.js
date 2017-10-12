import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './Candytar.css';
import renderFilter from './_filter';
import brandColors from '../../materials/colors/brandColors';

const defaultPickerFn = (colors) =>
  colors[Math.floor(Math.random() * colors.length)];

export default class Candytar extends Component {
  static propTypes = {
    /** Color of the Candytar */
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
    /**
     * A function that can be passed to determine the colour of the candytar.
     * By default if no colour is provided it will randomly picker a colour
     * from the available options. Given function is called with an array of
     * the available colors.
     */
    picker: PropTypes.func,
    /** Size of the Candytar */
    size: PropTypes.string.isRequired,
  };

  static defaultProps = {
    picker: defaultPickerFn,
  };

  componentWillMount = renderFilter

  render() {
    const { picker, color = picker(brandColors), size } = this.props;
    const style = { height: size, width: size };
    const classes = classnames('ax-candytar', `ax-candytar--${color}`);

    /* eslint-disable max-len */
    return (
      <svg className={ classes } style={ style } viewBox="0 0 32 32">
        <circle className="ax-candytar__background" cx="16" cy="16" r="16"></circle>
        <path
            className="ax-candytar__body"
            d="M16 20c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zM6 28.5c1.7-3.8 5.6-6.5 10-6.5 4.5 0 8.3 2.7 10 6.5C23.4 30.7 20 32 16 32s-7.3-1.3-10-3.5z"
            filter="url(#ax-candytar__filter)"></path>
      </svg>

    );
    /* eslint-enable max-len */
  }
}
