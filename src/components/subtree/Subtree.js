import PropTypes from 'prop-types';
import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Subtree extends Component {
  static propTypes = {
    children: PropTypes.node,
    isRendered: PropTypes.bool.isRequired,
    parentNode: PropTypes.object,
    subtree: PropTypes.func.isRequired,
    onSubtreeRender: PropTypes.func,
    onSubtreeUnrender: PropTypes.func,
  };

  static contextTypes = {
    axiomPositionParentNode: PropTypes.object,
  };

  componentDidMount() {
    const { isRendered } = this.props;

    if (isRendered) {
      this.init();
    }
  }

  componentDidUpdate(prevProps) {
    const { isRendered } = this.props;
    const shouldRender = isRendered && !prevProps.isRendered;
    const shouldDestroy = prevProps.isRendered && !isRendered;
    const shouldReRender = isRendered;

    if (shouldRender) {
      this.init();
    } else if (shouldDestroy) {
      this.destroySubtree();
    } else if (shouldReRender) {
      this.renderSubtree();
    }
  }

  componentWillUnmount() {
    const { isRendered } = this.props;

    if (isRendered) {
      this.destroySubtree();
    }
  }

  init() {
    this.createReactRootNode();
    this.renderSubtree();
  }

  createReactRootNode() {
    this._reactRootNode = document.createElement('div');
    this._reactRootNode.classList.add('AxiomSubtree');
    this.getParentNode().appendChild(this._reactRootNode);
  }

  destroySubtree() {
    const { onSubtreeUnrender } = this.props;

    ReactDOM.unmountComponentAtNode(this._reactRootNode);
    this.getParentNode().removeChild(this._reactRootNode);
    onSubtreeUnrender && onSubtreeUnrender();
  }

  getParentNode() {
    return this.props.parentNode ||
      this.context.axiomPositionParentNode ||
      document.body;
  }

  renderSubtree() {
    const { subtree, onSubtreeRender } = this.props;

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      subtree(),
      this._reactRootNode,
      onSubtreeRender && (() => onSubtreeRender(this._reactRootNode)),
    );
  }

  render() {
    return this.props.children || null;
  }
}
