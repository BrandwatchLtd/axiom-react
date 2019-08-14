import PropTypes from 'prop-types';
import { Component } from 'react';
import ReactDOM from 'react-dom';

const canOpenPortal = typeof document !== 'undefined';

export default class Portal extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
    parentNode: PropTypes.object,
  };

  static contextTypes = {
    axiomPositionParentNode: PropTypes.object,
  };

  componentWillMount() {
    if (!canOpenPortal) return;
    this._reactRootNode = document.createElement('div');
    this._reactRootNode.classList.add('AxiomSubtree');
  }

  componentDidMount() {
    if (!canOpenPortal) return;
    this.getParentNode().appendChild(this._reactRootNode);
  }

  componentWillUnmount() {
    if (!canOpenPortal) return;
    this.getParentNode().removeChild(this._reactRootNode);
  }

  getParentNode() {
    return this.props.parentNode ||
      this.context.axiomPositionParentNode ||
      document.body;
  }

  render() {
    if (!canOpenPortal) return null;

    return ReactDOM.createPortal(
      this.props.children,
      this._reactRootNode,
    );
  }
}
