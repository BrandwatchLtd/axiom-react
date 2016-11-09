import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from 'bw-axiom/components/base/Base';
import Italic from 'bw-axiom/components/typography/Italic';
import Strong from 'bw-axiom/components/typography/Strong';

if (__INCLUDE_CSS__) {
  require('./ColorSwatchColor.scss');
}

export default class ColorSwatchColor extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.shape({
      variable: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { className, color, ...rest } = this.props;
    const { hex, variable } = color;
    const classes = classnames(className, 'dm-color-swatch__color');

    return (
      <Base { ...rest } className={ classes } style={ { backgroundColor: hex } }>
        <Strong textEllipsis={ true }>${ variable }</Strong>
        <Italic textEllipsis={ true }>{ hex }</Italic>
      </Base>
    );
  }
}
