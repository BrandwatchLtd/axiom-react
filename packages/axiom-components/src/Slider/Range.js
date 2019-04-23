import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash.omit';
import Base from '../Base/Base';
import Handle from './Handle';
import sliderDefaultProps from './DefaultProps';
import './Slider.css';

export default class Range extends Component {
  static propTypes = {
    /** Disabled control of the slider */
    disabled: PropTypes.bool,
    /** Value of the marker to indicate balanced position */
    markerValue: PropTypes.number,
    /** Maximum number that can be selected */
    max: PropTypes.number.isRequired,
    /** Minimum number that can be selected */
    min: PropTypes.number.isRequired,
    /** Called when the sliders value changes */
    onChange: PropTypes.func.isRequired,
    /** Called when the slider is let go */
    onSlideEnd: PropTypes.func,
    /** Size of the slider */
    size: PropTypes.oneOf(['small', 'medium']),
    /** Configures the increments of the slide */
    step: PropTypes.number,
    /** Value formatter for the tooltip */
    valueFormatter: PropTypes.func,
    /** Values */
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    /** Enables a value indicating tooltip */
    withTooltip: PropTypes.bool,
  };

  static defaultProps = sliderDefaultProps;

  constructor(props) {
    super(props);

    this.focusedHandleIndex = 0;

    this.state = {
      draggedHandleIndex: null,
      isMouseOver: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  ensureValueInRange(value) {
    const { min, max } = this.props;
    return Math.max(min, Math.min(value, max));
  }

  getPercentageFromValue(value) {
    const { max } = this.props;
    const valueInRange = this.ensureValueInRange(value);
    return (valueInRange / max) * 100;
  }

  getValueFromPosition(clientX) {
    const { max, min, step } = this.props;
    const { left: posMin, right: posMax } = this.container.getBoundingClientRect();

    const posAsPercentage = Math.max(0, Math.min((clientX - posMin) / (posMax - posMin), 100));
    const value = step * Math.round(posAsPercentage * (max - min) / step);

    return this.ensureValueInRange(value);
  }

  getValues(clientX) {
    const { values } = this.props;

    return values.map((value, index) => {
      if (index === this.focusedHandleIndex) {
        return this.getValueFromPosition(clientX);
      }
      return value;
    });
  }

  getClosestHandleIndex(clientX) {
    const { values } = this.props;
    const xValue = this.getValueFromPosition(clientX);
    let closestDist;

    return values.reduce((closestIndex, currentValue, currentIndex) => {
      const currentDist = Math.abs(xValue - currentValue);
      if ( closestDist === undefined || currentDist < closestDist) {
        closestDist = currentDist;
        return currentIndex;
      }
      if (currentDist === closestDist && xValue > currentValue) {
        return currentIndex;
      }
      return closestIndex;
    }, 0);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown(event) {
    const { clientX } = event;
    this.focusedHandleIndex = this.getClosestHandleIndex(clientX);

    event.preventDefault();

    this.setState({ draggedHandleIndex: this.focusedHandleIndex });

    this.handleMouseMove(event);

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp(event) {
    const { onSlideEnd } = this.props;
    const { clientX } = event;

    this.setState({ draggedHandleIndex: null });
    onSlideEnd && onSlideEnd(this.getValues(clientX));

    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleBlur() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleFocus() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleMouseMove(event) {
    const { clientX } = event;

    this.onChange(this.getValues(clientX));
  }

  handleKeyDown(event) {
    const { step } = this.props;
    const { values } = this.state;

    switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      values[this.focusedHandleIndex] = this.ensureValueInRange(values[this.focusedHandleIndex] - step);
      break;
    case 'ArrowRight':
    case 'ArrowUp':
      values[this.focusedHandleIndex] = this.ensureValueInRange(values[this.focusedHandleIndex] + step);
      break;
    }

    this.onChange(values);
  }

  onChange(values) {
    const { onChange } = this.props;

    if (values[0] > values[1]) {
      switch (this.focusedHandleIndex) {
      case 0:
        values[0] = values[1];
        break;
      case 1:
        values[1] = values[0];
        break;
      default:
        throw new Error(`Unknown handle ${this.focusedHandleIndex} was in focus: change is not applied`);
      }
    }

    onChange(values);
  }

  render() {
    const { disabled, markerValue, size, values, valueFormatter, withTooltip, ...rest } = this.props;
    const { draggedHandleIndex, isMouseOver } = this.state;
    const valuesAsPercentage = values.map(value => this.getPercentageFromValue(value));
    const classes = classnames('ax-slider', `ax-slider--${size}`, {
      'ax-slider--disabled': disabled,
    });
    const sliderFillStyle = { left:`${valuesAsPercentage[0]}%`, width: `${valuesAsPercentage[1] - valuesAsPercentage[0]}%` };

    const markerValueAsPercentage = this.getPercentageFromValue(markerValue);
    const sliderMarkerStyle = { left:`${markerValueAsPercentage}%` };

    return (
      <Base { ...omit(rest, ['onSlideEnd', 'min', 'max', 'step']) }
          className={ classes }
          onBlur={ this.handleBlur }
          onFocus={ disabled ? null : this.handleFocus }
          onMouseLeave={ () => this.setState({ isMouseOver: false }) }
          onMouseOver={ () => this.setState({ isMouseOver: true }) }
          tabIndex="0">
        <div
            className="ax-slider__track"
            onMouseDown={ disabled ? null : this.handleMouseDown }
            ref={ (el) => this.container = el }>
          <div
              className="ax-slider__fill"
              style={ sliderFillStyle } />
          { markerValue !== undefined && <div
              className="ax-slider__marker"
              style={ sliderMarkerStyle } /> }
        </div>
        <Handle disabled={ disabled } isVisible={ draggedHandleIndex === 0 || (draggedHandleIndex === null && isMouseOver) }
            onMouseDown={ this.handleMouseDown }
            value={ values[0] }
            valueAsPercentage={ valuesAsPercentage[0] }
            valueFormatter={ valueFormatter }
            withTooltip={ withTooltip }/>

        <Handle disabled={ disabled } isVisible={ draggedHandleIndex === 1 || (draggedHandleIndex === null && isMouseOver) }
            onMouseDown={ this.handleMouseDown }
            value={ values[1] }
            valueAsPercentage={ valuesAsPercentage[1] }
            valueFormatter={ valueFormatter }
            withTooltip={ withTooltip }/>
      </Base>
    );
  }
}
