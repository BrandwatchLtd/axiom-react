import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import popperJS from 'popper.js';
import omit from 'lodash.omit';
import classnames from 'classnames';
import { findComponent } from '@brandwatch/axiom-utils';
import Portal from '../Portal/Portal';
import { PositionSourceRef } from './PositionSource';
import { PositionTargetRef } from './PositionTarget';
import { placementToPosition, positionToPlacement, getPlacementFlipOrder } from './_utils';
import './Position.css';

/* eslint-disable react/no-find-dom-node */
export default class Position extends Component {
  static propTypes = {
    /**
     * Allows the boundary element for the positioning to be set.
     */
    boundariesElement: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.oneOf(['scrollParent', 'viewport', 'window']),
    ]),
    /**
     * Children inside Position this should contain all of and
     * only PositionSource and PositionTarget or just a PositionSource
     * in the case of a given reference!
     */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.array,
    ]).isRequired,
    /**
     * Adds control to conditionally enable or disable the positioning logic.
     * Must be true for isVisible to take effect.
     */
    enabled: PropTypes.bool,
    /** Adds control of content flipping fallbacks. */
    flip: PropTypes.oneOf(['anticlockwise', 'clockwise', 'mirror']),
    /** Toggles the visibility of the PositionSource */
    isVisible: PropTypes.bool.isRequired,
    /** Controls the starting offset of the content */
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    /**
     * When provided a mask will be placed behind PositionSource, where this
     * function is called when clicked.
     */
    onMaskClick: PropTypes.func,
    /**
     * Optional handler that is called, with the new position, when PositionSource
     * has been positioned.
     */
    onPositionChange: PropTypes.func,
    /**
     * Controls the starting position around PositionTarget in which the
     * PositionSource will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * If Position should be attached to an element outside of the React context,
     * either a HTMLElement reference or a Popper.js compatible referenceObject
     * (see https://popper.js.org/popper-documentation.html#referenceObject) can
     * be passed in.
     */
    reference: PropTypes.object,
    /** Toggle that allows the arrow of the Context component to be hidden */
    showArrow: PropTypes.bool,
  };

  static defaultProps = {
    boundariesElement: 'viewport',
    enabled: true,
    flip: 'clockwise',
    offset: 'middle',
    position: 'top',
    showArrow:  false,
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
    const { boundariesElement, flip, showArrow, reference } = this.props;
    const { placement } = this.state;

    return new popperJS(reference || this._target, this._content, {
      onCreate: this.handleOnCreate,
      onUpdate: this.handleOnUpdate,
      placement,
      modifiers: {
        arrow: {
          enabled: showArrow,
          element: this._arrow,
        },
        flip: {
          behavior: getPlacementFlipOrder(placement, flip),
        },
        inner: {
          enabled: false,
        },
        offset: {
          enabled: false,
        },
        preventOverflow: {
          boundariesElement,
        },
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
    const { children, enabled, isVisible, onMaskClick, showArrow, reference, ...rest } = this.props;
    const { placement } = this.state;
    const [ position ] = placementToPosition(placement);

    const classes = classnames('ax-position', {
      'ax-position--arrow': showArrow,
    });

    const props = omit(rest, [
      'flip',
      'offset',
      'position',
      'onPositionChange',
    ]);

    return [
      !reference && cloneElement(findComponent(children, PositionTargetRef), {
        ref: (target) => this._target = ReactDOM.findDOMNode(target),
      }),
      enabled && isVisible ? (
        <Portal { ...props } key="portal">
          <div>
            { onMaskClick && (
              <div className="ax-position__mask" onClick={ onMaskClick } />
            ) }

            <div className={ classes } ref={ (el) => this._content = el }>
              {
                cloneElement(findComponent(children, PositionSourceRef), {
                  arrowRef: showArrow
                    ? (arrow) => this._arrow = ReactDOM.findDOMNode(arrow)
                    : undefined,
                  position,
                })
              }
            </div>
          </div>
        </Portal>
      ) : null,
    ];
  }
}
