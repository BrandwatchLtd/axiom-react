import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './Word.css';

export default class Word extends Component {
  static propTypes = {
    /** Delay of appearance animation */
    animationDelay: PropTypes.string,
    /** Fill color of the word */
    color: PropTypes.oneOf([
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
    ]),
    /** Disabled state of the word **/
    disabled: PropTypes.bool,
    /** Font family of the word */
    font: PropTypes.oneOf(['Roboto, Helvetica, Arial, sans-serif']).isRequired,
    /** Font size of the word */
    fontSize: PropTypes.string,
    /** Hidden state of the word **/
    hidden: PropTypes.bool,
    /** onClick handler */
    onClick: PropTypes.func,
    /** The content of the word */
    text: PropTypes.string,
    /** Where the word should be horizontal positioned from */
    textAnchor: PropTypes.oneOf([
      'start',
      'middle',
      'end',
      'inherit',
    ]),
    /** x coordinate of the word */
    x: PropTypes.number.isRequired,
    /** y coordinate of the word */
    y: PropTypes.number.isRequired,
  };

  static defaultProps = {
    animationDelay: '0',
    textAnchor: 'middle',
  };

  render() {
    const {
      animationDelay,
      color,
      disabled,
      font,
      fontSize,
      hidden,
      onClick,
      text,
      textAnchor,
      x,
      y,
      ...rest
    } = this.props;

    const active = !hidden && !disabled;
    const classes = classnames('ax-word', {
      [`ax-word--${color}`]: color,
      'ax-word--clickable': active && onClick,
      'ax-word--disabled': !hidden && disabled,
      'ax-word--hidden': hidden,
    });

    const style = {
      fontFamily: font,
      fontSize,
      animationDelay,
    };

    return (
      <text { ...rest }
          className={ classes }
          onClick={ active ? onClick : undefined }
          style={ style }
          textAnchor={ textAnchor }
          transform={ `translate(${x},${y})` }>
        { text }
      </text>
    );
  }
}
