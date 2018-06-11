import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Small } from '@brandwatch/axiom-components';
import './Bar.css';

const FILL_MODE_SOLID = 'solid';
const FILL_MODE_SEMISTRIPED = 'semistriped';
const FILL_MODE_STRIPED = 'striped';

export default class Bar extends Component {
  static propTypes = {
    /** Background color of the Bar */
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
      'sentiment-positive',
      'sentiment-negative',
      'sentiment-neutral',
      'social-twitter',
      'social-facebook',
      'social-instagram',
    ]).isRequired,
    /** Texture of the Bar */
    fillMode: PropTypes.oneOf([
      FILL_MODE_SOLID,
      FILL_MODE_SEMISTRIPED,
      FILL_MODE_STRIPED,
    ]),
    /** When true the bar is faded */
    isFaded: PropTypes.bool,
    /** When true the bar is invisible */
    isHidden: PropTypes.bool,
    /** Overwriting label above the bar instead of default percentage */
    label: PropTypes.node,
    /** Control for applying strong styling to the label */
    labelStrong: PropTypes.bool,
    /** Minimum thickness of the Bar */
    minSize: PropTypes.string,
    /** onClick handler that activates clickable styling */
    onClick: PropTypes.func,
    /**
     * Percentage value of the Bar, which determines the height and
     * content for the label
     */
    percent: PropTypes.number.isRequired,
    /** Visibility control of the label */
    showLabel: PropTypes.bool,
    /** Explicit thickness of the Bar */
    size: PropTypes.string,
  };

  static defaultProps = {
    isFaded: false,
    isHidden: false,
    labelStrong: false,
    minSize: '1rem',
    fillMode: FILL_MODE_SOLID,
  };

  static contextTypes = {
    direction: PropTypes.string.isRequired,
  };

  render() {
    const { direction } = this.context;
    const {
      color,
      fillMode,
      isFaded,
      isHidden,
      label,
      labelStrong,
      onClick,
      minSize,
      percent,
      showLabel,
      size,
      ...rest } = this.props;
    const isVertical = direction === 'up' || direction === 'down';
    const classes = classnames('ax-bars__bar', {
      'ax-bars__bar--center': size,
      'ax-bars__bar--clickable': onClick,
      'ax-bars__bar--faded': isFaded,
      'ax-bars__bar--hidden': isHidden,
    });

    const labelClasses = classnames('ax-bars__bar-label', {
      'ax-bars__bar-label--hidden': !showLabel,
    });

    const rectClasses = classnames('ax-bars__bar-rect',
      `ax-bars__bar-rect--${color}`);

    const stripClasses = classnames({
      'ax-bars__bar--semistriped': fillMode !== FILL_MODE_STRIPED,
      'ax-bars__bar--striped': fillMode === FILL_MODE_STRIPED,
    });

    const style = {
      height: isVertical && `${percent}%`,
      width: !isVertical && `${percent}%`,
    };

    const rectStyle = {
      height: !isVertical && size,
      minHeight: !isVertical && !size && minSize,
      width: isVertical && size,
      minWidth: isVertical && !size && minSize,
    };

    return (
      <Base { ...rest }
          className={ classes }
          onClick={ onClick }
          style={ style }>
        <div className={ rectClasses } style={ rectStyle }>
          { fillMode !== FILL_MODE_STRIPED && (<div className="ax-bars__bar--solid" />) }
          { fillMode !== FILL_MODE_SOLID && (<div className={ stripClasses } />) }
        </div>
        <div className={ labelClasses }>
          <Small textStrong={ labelStrong }>{ label || `${percent}%` }</Small>
        </div>
      </Base>
    );
  }
}
