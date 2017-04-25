import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Link.css';

export default class Link extends Component {
  static propTypes = {
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    style: PropTypes.oneOf(['inherit', 'normal', 'subtle', 'light']),
  };

  static defaultProps = {
    Component: 'a',
    style: 'normal',
  };

  render() {
    const { children, Component, style, ...rest } = this.props;
    const classes = classnames('ax-link', {
      [`ax-link--style-${style}`]: style,
    });

    return (
      <Base { ...rest } Component={ Component } className={ classes }>
        { children }
      </Base>
    );
  }
}
