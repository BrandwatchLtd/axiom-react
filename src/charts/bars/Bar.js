import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Small } from 'bw-axiom';
import classnames from 'classnames';
import './Bar.css';

export default class Bar extends Component {
  static propTypes = {
    /** Background color of the Bar */
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
    ]).isRequired,
    /** Control for applying strong styling to the label */
    labelStrong: PropTypes.bool,
    /** Minimum thickness of the Bar */
    minSize: PropTypes.string,
    /**
     * Percentage value of the Bar, which determines the height and
     * content for the label
     */
    percent: PropTypes.number.isRequired,
    /** Visibility control of the label */
    showLabel: PropTypes.bool,
    /** Explicit thickness of the Bar */
    size: PropTypes.string,
    /** onClick handler that activates clickable styling */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    labelStrong: false,
    minSize: '1rem',
  };

  static contextTypes = {
    direction: PropTypes.string.isRequired,
  };

  render() {
    const { direction } = this.context;
    const { color, labelStrong, onClick, minSize, percent, showLabel, size, ...rest } = this.props;
    const isVertical = direction === 'up' || direction === 'down';
    const classes = classnames('ax-bars__bar', {
      'ax-bars__bar--center': size,
      'ax-bars__bar--clickable': onClick,
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
          <Small textStrong={ labelStrong }>{ percent }%</Small>
        </div>
      </Base>
    );
  }
}
