import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Reveal.css';

export default class Reveal extends Component {
  static propTypes = {
    /** Content that will revealed */
    children: PropTypes.node.isRequired,
    /** Removes children from the reveal container when it is collapsed */
    removeChildren: PropTypes.bool,
    /** SKIP */
    space: PropTypes.string,
    /** Revealed status, true will expand out the content, false will collapse it. */
    visible: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      isTransitioning: props.visible,
      overflow: 'hidden',
    };
  }

  componentDidMount() {
    const { visible } = this.props;

    this.el.addEventListener('transitionend', () => {
      if (this.props.visible) {
        this.afterReveal();
      } else {
        this.afterConceal();
      }
    });

    if (visible) {
      this.reveal();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { visible } = this.props;
    const { visible: willBeVisible } = nextProps;

    if (visible && !willBeVisible) {
      this.conceal();
    } else if (!visible && willBeVisible) {
      this.reveal();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame( this._frameId );
  }

  conceal() {
    this.setState({ isTransitioning: true, overflow: 'hidden' });
    this._frameId = window.requestAnimationFrame(() => {
      this.setState({ height: this.inner.offsetHeight });
      this._frameId = window.requestAnimationFrame(() => {
        this.setState({ height: 0, opacity: 0 });
      });
    });
  }

  afterConceal() {
    this.setState({ isTransitioning: false });
  }

  reveal() {
    this._frameId = window.requestAnimationFrame(() => {
      this.setState({
        height: this.inner.offsetHeight,
        opacity: 1,
      });
    });
  }

  afterReveal() {
    this.setState({
      height: undefined,
      isTransitioning: false,
      overflow: undefined,
    });
  }

  render() {
    const { height, isTransitioning, opacity, overflow } = this.state;
    const { children, removeChildren, space, visible, ...rest } = this.props;
    const renderChildren = isTransitioning || !removeChildren || visible;
    const style = { height, opacity, overflow };
    const innerStyle = { overflow };
    const classes = classnames('ax-reveal', {
      'ax-reveal--visible': visible,
    });

    /* eslint-disable react/no-find-dom-node */
    return (
      <Base { ...rest }
          className={ classes }
          ref={ (el) => this.el = findDOMNode(el) }
          space={ visible ? space : 'x0' }
          style={ style }>
        <div
            className="ax-reveal__inner"
            ref={ (el) => this.inner = el }
            style={ innerStyle }>
          { renderChildren && children }
        </div>
      </Base>
    );
    /* eslint-enable react/no-find-dom-node */
  }
}
