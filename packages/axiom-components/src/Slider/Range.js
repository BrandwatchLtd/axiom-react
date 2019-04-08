import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash.omit';
import Base from '../Base/Base';
import Marker from './Marker';
import sliderDefaultProps from './DefaultProps';
import './Slider.css';

export default class Range extends Component {
  static propTypes = {
    /** Disabled control of the slider */
    disabled: PropTypes.bool,
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

    this.focusedMarkerIndex = 0;

    this.state = {
      draggedMarkerIndex: null,
      isMouseOver: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  getValueFromPosition(clientX) {
    const { max, min, step } = this.props;
    const { left: posMin, right: posMax } = this.container.getBoundingClientRect();

    const posAsPercentage = Math.max(0, Math.min((clientX - posMin) / (posMax - posMin), 100));
    const value = step * Math.round(posAsPercentage * (max - min) / step);

    return Math.max(min, Math.min(value, max));
  }

  getValues(clientX) {
    const { values } = this.props;

    values[this.focusedMarkerIndex] = this.getValueFromPosition(clientX);

    return values;
  }

  getClosestMarkerIndex(clientX) {
    const { values } = this.props;
    const xValue = this.getValueFromPosition(clientX);
    let closestDist;

    return values.reduce((closestIndex, currentValue, currentIndex) => {
      const currentDist = Math.abs(xValue - currentValue);
      if ( closestDist === undefined || currentDist < closestDist) {
        closestDist = currentDist;
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
    this.focusedMarkerIndex = this.getClosestMarkerIndex(clientX);

    event.preventDefault();

    this.setState({ draggedMarkerIndex: this.focusedMarkerIndex });

    this.handleMouseMove(event);

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp(event) {
    const { onSlideEnd } = this.props;
    const { clientX } = event;

    this.setState({ draggedMarkerIndex: null });
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
    const { max, min, step } = this.props;
    const { values } = this.state;

    switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      values[this.focusedMarkerIndex] = Math.max(min, Math.min(values[this.focusedMarkerIndex] - step, max));
      break;
    case 'ArrowRight':
    case 'ArrowUp':
      values[this.focusedMarkerIndex] = Math.max(min, Math.min(values[this.focusedMarkerIndex] + step, max));
      break;
    }

    this.onChange(values);
  }

  onChange(values) {
    const { onChange } = this.props;

    if (values[0] > values[1]) {
      switch (this.focusedMarkerIndex) {
      case 0:
        values[0] = values[1];
        break;
      case 1:
        values[1] = values[0];
        break;
      default:
        return;
      }
    }

    onChange(values);
  }

  render() {
    const { disabled, max, min, size, values, valueFormatter, withTooltip, ...rest } = this.props;
    const { draggedMarkerIndex, isMouseOver } = this.state;
    const valuesInRange = values.map(value => Math.max(min, Math.min(value, max)));
    const valuesAsPercentage = valuesInRange.map(valueInRange => (valueInRange / max) * 100);
    const classes = classnames('ax-slider', `ax-slider--${size}`, {
      'ax-slider--disabled': disabled,
    });
    const sliderFillStyle = { left:`${valuesAsPercentage[0]}%`, width: `${valuesAsPercentage[1] - valuesAsPercentage[0]}%` };

    return (
      <Base { ...omit(rest, ['onSlideEnd']) }
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
        </div>
        <Marker disabled={ disabled } isVisible={ draggedMarkerIndex === 0 || (draggedMarkerIndex === null && isMouseOver) }
            onMouseDown={ this.handleMouseDown }
            value={ values[0] }
            valueAsPercentage={ valuesAsPercentage[0] }
            valueFormatter={ valueFormatter }
            withTooltip={ withTooltip }/>

        <Marker disabled={ disabled } isVisible={ draggedMarkerIndex === 1 || (draggedMarkerIndex === null && isMouseOver) }
            onMouseDown={ this.handleMouseDown }
            value={ values[1] }
            valueAsPercentage={ valuesAsPercentage[1] }
            valueFormatter={ valueFormatter }
            withTooltip={ withTooltip }/>
      </Base>
    );
  }
}
