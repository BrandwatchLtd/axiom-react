import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Word.css';

export default class Word extends Component {
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
    font: PropTypes.oneOf(['Roboto, Helvetica, Arial, sans-serif']).isRequired,
    fontSize: PropTypes.string,
    text: PropTypes.string,
    textAnchor: PropTypes.oneOf([
      'start',
      'middle',
      'end',
      'inherit',
    ]),
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  };

  static defaultProps = {
    textAnchor: 'middle',
  };

  render() {
    const { color, font, fontSize, text, textAnchor, x, y, ...rest } = this.props;
    const classes = classnames('ax-word', {
      [`ax-word--${color}`]: color,
    });

    const style = {
      fontFamily: font,
      fontSize: fontSize,
    };

    return (
      <text { ...rest }
          className={ classes }
          style={ style }
          textAnchor={ textAnchor }
          transform={ `translate(${x},${y})` }>
        { text }
      </text>
    );
  }
}
