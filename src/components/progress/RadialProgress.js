import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import './RadialProgress.css';

export default class RadialProgress extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    diameter: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
  };

  render() {
    const { children, className, diameter, size, ...rest } = this.props;
    const classes = classnames(
      'ax-radial-progress',
      `ax-radial-progress--${size}`,
      className,
    );

    return (
      <Base { ...rest }
          Component="svg"
          className={ classes }
          viewBox={ `0 0 ${ diameter } ${ diameter }` }>
        <g transform={ `translate(${ diameter / 2 }, ${ diameter / 2 }) rotate(-90)` }>
          { children }
        </g>
      </Base>
    );
  }
}
