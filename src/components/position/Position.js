import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import popperJS from 'popper.js';
import omit from 'lodash.omit';
import findComponent from '../../utils/findComponent';
import { PositionContentRef } from './PositionContent';
import { PositionTargetRef } from './PositionTarget';
import Portal from '../portal/Portal';
import { placementToPosition, positionToPlacement, getPlacementFlipOrder } from './_utils';
import './Position.css';

/* eslint-disable react/no-find-dom-node */
export default class Position extends Component {
  static propTypes = {
    /**
     * Children inside Position this should contain all of and
     * only PositionContent and PositionTarget!
     */
    children: PropTypes.array.isRequired,
    /**
     * Adds control to conditionally enable or disable the positioning logic.
     * Must be true for isVisible to take effect.
     */
    enabled: PropTypes.bool,
    /** Adds control of content flipping fallbacks. */
    flip: PropTypes.oneOf(['anticlockwise', 'clockwise', 'mirror']),
    /** Toggles the visibility of the PositionContent */
    isVisible: PropTypes.bool.isRequired,
    /** Controls the starting offset of the content */
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    /**
     * Controls the starting position around PositionTarget in which the
     * PositionContent will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /** Toggle that allows the arrow of the Context component to be hidden */
    showArrow: PropTypes.bool,
    /**
     * When provided a mask will be placed behind PositionContent, where this
     * function is called when clicked.
     */
    onMaskClick: PropTypes.func,
    /**
     * Optional handler that is called, with the new position, when PositionContent
     * has been positioned.
     */
    onPositionChange: PropTypes.func,
  };

  static defaultProps = {
    enabled: true,
    flip: 'clockwise',
    offset: 'middle',
    position: 'top',
    showArrow:  true,
  };

  constructor(props) {
    super(props);
    this.handleOnCreate = this.handleOnCreate.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.state = {
      placement: positionToPlacement(props.position, props.offset),
    };
  }

  componentDidMount() {
    if (this._content) {
      this._popper = this.createPopper();
    }
  }

  componentDidUpdate() {
    const { enabled, isVisible, position, offset } = this.props;

    if (enabled && isVisible) {
      if (!this._popper) {
        this._popper = this.createPopper();
      } else {
        this._popper.options.placement = positionToPlacement(position, offset);
        this._popper.update();
      }
    } else if (this._popper) {
      this.destroyPopper();
    }
  }

  componentWillUnmount() {
    this.destroyPopper();
  }

  createPopper() {
    const { flip, showArrow } = this.props;
    const { placement } = this.state;

    return new popperJS(this._target, this._content, {
      onCreate: this.handleOnCreate,
      onUpdate: this.handleOnUpdate,
      placement: placement,
      modifiers: {
        arrow: {
          enabled: showArrow,
          element: this._arrow,
        },
        flip: {
          behavior: getPlacementFlipOrder(placement, flip),
        },
        inner: { enabled: false },
        offset: { enabled: false },
      },
    });
  }

  destroyPopper() {
    if (this._popper) {
      this._popper.destroy();
    }

    delete this._popper;
    delete this._arrow;
    delete this._content;

    const placement = positionToPlacement(this.props.position, this.props.offset);
    if (placement !== this.state.placement) {
      this.setState({ placement });
    }
  }

  handleOnCreate(popper) {
    const { onPositionChange } = this.props;

    this.handleOnUpdate(popper);

    if (onPositionChange) {
      onPositionChange(popper.placement);
    }
  }

  handleOnUpdate({ placement }) {
    const { onPositionChange } = this.props;
    const { placement: statePlacement } = this.state;

    if (statePlacement !== placement) {
      this.setState({ placement });

      if (onPositionChange) {
        onPositionChange(placement);
      }
    }
  }

  render() {
    const { children, enabled, isVisible, onMaskClick, showArrow, ...rest } = this.props;
    const { placement } = this.state;
    const [ position ] = placementToPosition(placement);
    const props = omit(rest, [
      'flip',
      'offset',
      'position',
      'onPositionChange',
    ]);

    return [
      cloneElement(findComponent(children, PositionTargetRef), {
        ref: (target) => this._target = ReactDOM.findDOMNode(target),
      }),
      enabled && isVisible ? (
        <Portal { ...props } key="portal">
          <div>
            <div className="ax-position" ref={ (el) => this._content = el }>
              {
                cloneElement(findComponent(children, PositionContentRef), {
                  arrowRef: showArrow
                    ? (arrow) => this._arrow = ReactDOM.findDOMNode(arrow)
                    : undefined,
                  position,
                })
              }
            </div>

            { onMaskClick && (
              <div className="ax-position__mask" onClick={ onMaskClick } />
            ) }
          </div>
        </Portal>
      ) : null,
    ];
  }
}


