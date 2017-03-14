import React, { Component, PropTypes } from 'react';

export default class Word extends Component {
  static propTypes = {
    color: PropTypes.string,
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
    const { color, font, fontSize, text, textAnchor, x, y } = this.props;
    const style = {
      fill: color,
      fontFamily: font,
      fontSize: fontSize,
      transform: `translate(${x}px,${y}px)`,
    };

    return (
      <text className="ax-word" style={ style } textAnchor={ textAnchor }>
        { text }
      </text>
    );
  }
}
