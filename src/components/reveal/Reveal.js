import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Reveal.css';

export default class Reveal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    space: PropTypes.string,
    visible: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { visible } = this.props;

    this.el.addEventListener('transitionend', () => {
      if (this.props.visible) {
        this.afterReveal();
      }
    });

    if (visible) {
      this.reveal();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = this.props;
    const { visible: willBeVisible } = nextProps;

    if (visible && !willBeVisible) {
      this.conceal();
    } else if (!visible && willBeVisible) {
      this.reveal();
    }
  }

  conceal() {
    this.setState({
      height: this.inner.offsetHeight,
    });

    window.requestAnimationFrame(() => {
      this.setState({
        height: 0,
        opacity: 0,
      });
    });
  }

  reveal() {
    this.setState({
      height: this.inner.offsetHeight,
      opacity: 1,
    });
  }

  afterReveal() {
    this.setState({
      height: 'auto',
    });
  }

  render() {
    const { height, opacity } = this.state;
    const { children, space, visible, ...rest } = this.props;
    const style = { height, opacity };
    const classes = classnames('ax-reveal', {
      'ax-reveal--visible': visible,
    });

    return (
      <Base { ...rest }
          className={ classes }
          ref={ (el) => this.el = findDOMNode(el) }
          space={ visible ? space : 'none' }
          style={ style }>
        <div
            className="ax-reveal__inner"
            ref={ (el) => this.inner = el }>
          { children }
        </div>
      </Base>
    );
  }
}
