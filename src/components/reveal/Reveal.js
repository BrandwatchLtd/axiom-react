import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
      overflow: 'hidden',
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
      overflow: 'hidden',
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
      height: undefined,
      overflow: undefined,
    });
  }

  render() {
    const { height, opacity, overflow } = this.state;
    const { children, space, visible, ...rest } = this.props;
    const style = { height, opacity, overflow };
    const innerStyle = { overflow };
    const classes = classnames('ax-reveal', {
      'ax-reveal--visible': visible,
    });

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
          { children }
        </div>
      </Base>
    );
  }
}
