import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Link.css';

export default class Link extends Component {
  static propTypes = {
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    style: PropTypes.oneOf([
      'body',
      'day',
      'inherit',
      'mono',
      'night',
      'normal',
      'subtle',
    ]),
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
