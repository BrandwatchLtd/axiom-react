import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext from '../Tooltip/TooltipContext';
import './Slider.css';

export default class Slider extends Component {
  static propTypes = {
    /** Disabled control of the slider */
    disabled: PropTypes.bool,
    /** Maximum number that can be selected */
    max: PropTypes.number.isRequired,
    /** Minimum number that can be selected */
    min: PropTypes.number.isRequired,
    /** Called when the sliders value changes */
    onChange: PropTypes.func.isRequired,
    /** Size of the slider */
    size: PropTypes.oneOf(['small', 'medium']),
    /** Configures the increments of the slide */
    step: PropTypes.number,
    /** Value */
    value: PropTypes.number.isRequired,
    /** Value formatter for the tooltip */
    valueFormatter: PropTypes.func,
    /** Enables a value indicating tooltip */
    withTooltip: PropTypes.bool,
  };

  static defaultProps = {
    size: 'small',
    step: 1,
    valueFormatter: (n) => n,
    withTooltip: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      isMouseOver: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown(event) {
    const { left, width } = this.container.getBoundingClientRect();

    event.preventDefault();
    this.posMin = left;
    this.posMax = left + width;
    this.handleMouseMove(event);
    this.setState({ isDragging: true });
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp() {
    this.setState({ isDragging: false });
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleBlur() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleFocus() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleMouseMove(event) {
    const { max, min, onChange, step } = this.props;
    const { clientX } = event;
    const posAsPercentage = Math.max(0, Math.min((clientX - this.posMin) / (this.posMax - this.posMin), 100));
    const value = step * Math.round(posAsPercentage * (max - min) / step);
    const valueInRange = Math.max(min, Math.min(value, max));

    onChange(valueInRange);
  }

  handleKeyDown(event) {
    const { max, min, onChange, step, value } = this.props;

    switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      onChange(Math.max(min, Math.min(value - step, max)));
      break;
    case 'ArrowRight':
    case 'ArrowUp':
      onChange(Math.max(min, Math.min(value + step, max)));
      break;
    }
  }

  render() {
    const { disabled, max, min, size, value, valueFormatter, withTooltip, ...rest } = this.props;
    const { isDragging, isMouseOver } = this.state;
    const valueInRange = Math.max(min, Math.min(value, max));
    const valueAsPercentage = (valueInRange / max) * 100;
    const classes = classnames('ax-slider', `ax-slider--${size}`, {
      'ax-slider--disabled': disabled,
    });

    return (
      <Base { ...rest }
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
              style={ { width: `${valueAsPercentage}%` } } />
        </div>

        <Position
            enabled={ withTooltip }
            isVisible={ isDragging || isMouseOver }
            showArrow>
          <PositionTarget>
            <div
                className="ax-slider__thumb"
                onMouseDown={ disabled ? null : this.handleMouseDown }
                style={ { left: `${valueAsPercentage}%` } } />
          </PositionTarget>

          <PositionSource>
            <TooltipContext theme="night" width="auto">
              <TooltipContent textSize="small" textStrong>
                { valueFormatter(value) }
              </TooltipContent>
            </TooltipContext>
          </PositionSource>
        </Position>
      </Base>
    );
  }
}
