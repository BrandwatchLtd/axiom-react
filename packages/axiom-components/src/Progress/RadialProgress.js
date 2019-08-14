import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './RadialProgress.css';

export default class RadialProgress extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    diameter: PropTypes.number.isRequired,
    size: PropTypes.string,
    sizeRem: PropTypes.string,
  };

  render() {
    const { children, className, diameter, size, sizeRem, ...rest } = this.props;
    const style = {};
    const classes = classnames(className, 'ax-radial-progress', {
      [`ax-radial-progress--${size}`]: size,
    });

    if (sizeRem) {
      style.width = sizeRem;
      style.height = sizeRem;
    }

    return (
      <Base { ...rest }
          Component="svg"
          className={ classes }
          style={ style }
          viewBox={ `0 0 ${ diameter } ${ diameter }` }>
        <g transform={ `translate(${ diameter / 2 }, ${ diameter / 2 }) rotate(-90)` }>
          { children }
        </g>
      </Base>
    );
  }
}
