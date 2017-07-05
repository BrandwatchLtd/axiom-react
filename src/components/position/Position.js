import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import popperJS from 'popper.js';
import { findComponent, PositionContent, PositionTarget } from 'bw-axiom';
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
     * Adds control to conditional enable or disabled the positioning logic.
     * Must be true for isVisible to take effect.
     */
    enabled: PropTypes.bool,
    /** Toggles the visibility of the PositionContent */
    isVisible: PropTypes.bool.isRequired,
    /** Controls the starting offset of the content */
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    /**
     * An HTML element that holds the dynamically inserted PositionContent children.
     * By default this will be inserted into an element on the body.
     */
    parentNode: PropTypes.object,
    /**
     * Controls the starting position around PositionTarget in which the
     * PositionContent will attempt to be placed. If that position is not available
     * due to collision, it will be placed clockwise from that position until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * When provided a mask will be placed behind PositionContent, where this
     * function is called when clicked.
     */
    onMaskClick: PropTypes.func,
  };

  static defaultProps = {
    enabled: true,
    offset: 'middle',
    position: 'top',
  };

  static contextTypes = {
    axiomPositionParentNode: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      placement: positionToPlacement(props.position, props.offset),
    };
  }

  componentDidMount() {
    const { enabled, isVisible } = this.props;

    if (enabled && isVisible) {
      this.init();
    }
  }

  componentDidUpdate(prevProps) {
    const { enabled, isVisible, position, offset } = this.props;
    const shouldShow = enabled && isVisible && (!prevProps.enabled || !prevProps.isVisible);
    const shouldHide = prevProps.isVisible && prevProps.enabled && (!enabled || !isVisible);
    const shouldReRender = enabled && isVisible;

    if (shouldShow) {
      this.init();
    } else if (shouldHide) {
      this.destroy();
    } else if (shouldReRender) {
      this.renderSubtree();
      this._popper.options.placement = positionToPlacement(position, offset);
      this._popper.update();
    }
  }

  componentWillUnmount() {
    const { enabled, isVisible } = this.props;

    if (enabled && isVisible) {
      this.destroy();
    }
  }

  init() {
    this.createReactRootNode();
    this.createPopper();
  }

  createReactRootNode() {
    const parentNode = this.props.parentNode ||
      this.context.axiomPositionParentNode || document.body;
    this._reactRootNode = document.createElement('div');
    this._reactRootNode.classList.add('AxiomPositionRoot');

    parentNode.appendChild(this._reactRootNode);

    this.renderSubtree();
  }

  createPopper() {
    const { placement: statePlacement } = this.state;
    const boundHandlePlacementChange = this.handlePlacementChange.bind(this);

    this._popper = new popperJS(this._target, this._content, {
      onCreate: boundHandlePlacementChange,
      onUpdate: boundHandlePlacementChange,
      placement: statePlacement,
      modifiers: {
        arrow: {
          element: this._arrow,
        },
        flip: {
          behavior: getPlacementFlipOrder(statePlacement),
        },
        inner: { enabled: false },
        offset: { enabled: false },
      },
    });
  }

  handlePlacementChange({ placement }) {
    const { placement: statePlacement } = this.state;

    if (statePlacement !== placement) {
      this.setState({ placement });
    }
  }

  destroy() {
    const parentNode = this.props.parentNode || document.body;

    this._popper.destroy();
    ReactDOM.unmountComponentAtNode(this._reactRootNode);

    parentNode.removeChild(this._reactRootNode);

    delete this._reactRootNode;
    delete this._content;
    delete this._popper;
    delete this._target;

    const placement = positionToPlacement(this.props.position, this.props.offset);

    if (placement !== this.state.placement) {
      this.setState({ placement });
    }

  }

  renderContent() {
    const { children, onMaskClick } = this.props;
    const { placement } = this.state;
    const [ position ] = placementToPosition(placement);

    return (
      <div>
        <div className="ax-position">
          {
            cloneElement(findComponent(children, PositionContent), {
              arrowRef: (arrow) => this._arrow = ReactDOM.findDOMNode(arrow),
              position,
            })
          }
        </div>

        { onMaskClick && (
          <div className="ax-position__mask" onClick={ onMaskClick } />
        ) }
      </div>
    );
  }

  renderSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderContent(),
      this._reactRootNode,
      () => {
        this._content = this._reactRootNode.firstElementChild.firstElementChild;
      }
    );
  }

  render() {
    const { children } = this.props;

    return cloneElement(findComponent(children, PositionTarget), {
      ref: (target) => this._target = ReactDOM.findDOMNode(target),
    });
  }
}
