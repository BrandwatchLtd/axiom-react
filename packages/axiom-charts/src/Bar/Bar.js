import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Small } from '@brandwatch/axiom-components';
import './Bar.css';

export default class Bar extends Component {
  static propTypes = {
    /** Background color of the Bar */
    color: PropTypes.oneOf([
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
  };

  static contextTypes = {
    direction: PropTypes.string.isRequired,
  };

  render() {
    const { direction } = this.context;
    const {
      color,
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
        <div className={ rectClasses } style={ rectStyle } />
        <div className={ labelClasses }>
          <Small textStrong={ labelStrong }>{ label || `${percent}%` }</Small>
        </div>
      </Base>
    );
  }
}
