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
    children: PropTypes.array.isRequired,
    isVisible: PropTypes.bool.isRequired,
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    onMaskClick: PropTypes.func,
  };

  static defaultProps = {
    offset: 'middle',
    position: 'top',
  }

  constructor(props) {
    super(props);

    this.state = {
      placement: positionToPlacement(props.position, props.offset),
    };
  }

  componentDidMount() {
    const { isVisible } = this.props;

    if (isVisible) {
      this.init();
    }
  }

  componentDidUpdate(prevProps) {
    const { isVisible, position, offset } = this.props;

    if (isVisible !== prevProps.isVisible) {
      if (isVisible) {
        this.init();
      } else {
        this.destroy();
      }
    } else if (isVisible) {
      this.renderSubtree();
      this._popper.options.placement = positionToPlacement(position, offset);
      this._popper.update();
    }
  }

  componentWillUnmount() {
    const { isVisible } = this.props;

    if (isVisible) {
      this.destroy();
    }
  }

  init() {
    this.createReactRootNode();
    this.createPopper();
  }

  createReactRootNode() {
    this._reactRootNode = document.createElement('div');
    this._reactRootNode.classList.add('AxiomPositionRoot');
    document.body.appendChild(this._reactRootNode);
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
    this._popper.destroy();
    ReactDOM.unmountComponentAtNode(this._reactRootNode);
    document.body.removeChild(this._reactRootNode);

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
