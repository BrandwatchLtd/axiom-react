import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import './Line.css';

/** Browsers that don't support SVG vector-effect ... IE11 */
const hasVectorEffectSupport = typeof window !== 'undefined' &&
  window.CSS &&
  CSS.supports('vector-effect', 'non-scaling-stroke');

const createPath = (data, upper) =>
  data.reduce((path, n, i, { length: l }) => {
    if (isNaN(n) || n === null) return path;
    return `${path}${i === 0
      ? `M 0,${upper - n}`
      : ` L ${(i / (l - 1)) * 100},${upper - n}`}`;
  }
  , '');

export default class Line extends Component {
  static propTypes = {
    /** LinePoints */
    children: PropTypes.node,
    /** Background color of the Line */
    color: PropTypes.oneOf([
      'subtle',
      'overlay-light',
      'tiny-clanger',
      'critical-mass',
      'fantastic-voyage',
      'paradise-lost',
      'serene-sea',
      'electric-dreams',
      'giant-leap',
      'moon-lagoon',
      'space-invader',
      'terra-form',
      'primeval-soup',
      'sun-maker',
      'new-horizon',
      'blast-off',
      'crash-course',
      'ground-control',
      'space-oddity',
      'deep-thought',
      'luna-dust',
    ]).isRequired,
    /** Dash length */
    dasharray: PropTypes.string,
    /** Dash array */
    dasharrayWithoutScalingStroke: PropTypes.string,
    /**
     * Data that determines the position of the line, if no lower
     * or upper bounds are given then the lower and upper values
     * will be taken from this data set.
     */
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    /** Faded styling on the line */
    faded: PropTypes.bool,
    /** Height of the container the line is to be rendered in */
    height: PropTypes.string.isRequired,
    /**
     * Lower value to normalise the data against, do not provide
     * for a denormalised line.
     */
    lower: PropTypes.number,
    /**
     * Upper value to normalise the data against, do no provide
     * for a denormalise line.
     */
    upper: PropTypes.number,
    /** Width of the lines path */
    width: PropTypes.string,
    /** Width without vector-effect: non-scaling-stroke support */
    widthWithoutScalingStroke: PropTypes.string,
  };

  static defaultProps = {
    dasharray: '',
    dasharrayWithoutScalingStroke: '',
    width: '0.125rem',
    widthWithoutScalingStroke: '0.015625rem',
  };

  render() {
    const fData = this.props.data.filter((n) => !isNaN(n) && n !== null);
    const dataLower = Math.min(...fData);
    const dataUpper = Math.max(...fData);
    const {
      color,
      children,
      data,
      dasharray,
      dasharrayWithoutScalingStroke,
      height,
      faded,
      lower = dataLower,
      upper = dataUpper,
      width,
      widthWithoutScalingStroke,
      ...rest
    } = this.props;

    const strokeDasharray = hasVectorEffectSupport ? dasharray : dasharrayWithoutScalingStroke;
    const strokeWidth = hasVectorEffectSupport ? width : widthWithoutScalingStroke;
    const finalLower = Math.min(lower, dataLower);
    const finalUpper = Math.max(upper, dataUpper);
    const classes = classnames(
      'ax-line',
      `ax-line--${color}`, {
        'ax-line--faded': faded,
      });

    return (
      <div { ...rest } className={ classes }>
        <svg
            className="ax-line__svg"
            preserveAspectRatio="none"
            style={ { height } }
            viewBox={ `0 0 100 ${finalUpper - finalLower}` }
            width="100%">
          <path
              className="ax-line__path"
              d={ createPath(data, finalUpper) }
              style={ { strokeDasharray, strokeWidth } } />
        </svg>

        { children && children.map((c, i) =>
          (!c || isNaN(data[i]) || data[i] === null) ? null :
            cloneElement(c, {
              style: strokeDasharray ? 'hollow' : 'solid',
              value: data[i],
              x: (i / (data.length - 1)) * 100,
              y: ((data[i] - finalLower) / (finalUpper - finalLower)) * 100,
            })
          )
        }
      </div>
    );
  }
}
