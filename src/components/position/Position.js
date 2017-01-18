import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import popperJS from 'popper.js';
import { findComponent, PositionContent, PositionTarget } from 'bw-axiom';
import { placementToPosition, positionToPlacement, getPlacementFlipOrder } from './_utils';

if (__INCLUDE_CSS__) {
  require('./Position.scss');
}

export default class Position extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    isVisible: PropTypes.bool.isRequired,
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  };

  static defaultProps = {
    offset: 'middle',
    position: 'top',
  }

  componentWillMount() {
    const { position, offset } = this.props;

    this.setState({
      placement: positionToPlacement(position, offset),
    });
  }

  componentDidMount() {
    const { isVisible } = this.props;

    if (isVisible) {
      this.init();
    }
  }

  componentDidUpdate(prevProps) {
    const { isVisible } = this.props;

    if (isVisible !== prevProps.isVisible) {
      if (isVisible) {
        this.init();
      } else {
        this.destroy();
      }
    } else if (isVisible) {
      this.renderSubtree();
      this._popper.destroy();
      this.createPopper();
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

    this._popper = new popperJS(this._target, this._content, {
      onCreate: ({ placement }) => placement !== statePlacement &&
        this.setState({ placement }),
      onUpdate: ({ placement }) => placement !== statePlacement &&
        this.setState({ placement }),
      placement: statePlacement,
      modifiers: {
        flip: {
          behavior: getPlacementFlipOrder(statePlacement),
        },
      },
    });
  }

  destroy() {
    this._popper.destroy();
    ReactDOM.unmountComponentAtNode(this._reactRootNode);
    document.body.removeChild(this._reactRootNode);

    delete this._reactRootNode;
    delete this._content;
    delete this._popper;
    delete this._target;
  }

  renderContent() {
    const { children } = this.props;
    const { placement } = this.state;
    const [ position, offset ] = placementToPosition(placement);

    return (
      <div className="ax-position">
        { cloneElement(findComponent(children, PositionContent), {
          position,
          offset,
        }) }
      </div>
    );
  }

  renderSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderContent(),
      this._reactRootNode,
      () => this._content = this._reactRootNode.firstElementChild
    );
  }

  render() {
    const { children } = this.props;

    /* eslint-disable react/no-find-dom-node */
    return cloneElement(findComponent(children, PositionTarget), {
      ref: (target) => this._target = ReactDOM.findDOMNode(target),
    });
    /* eslint-enable react/no-find-dom-node */
  }
}
