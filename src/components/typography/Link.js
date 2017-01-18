import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Link.scss');
}

export default class Link extends Component {
  static propTypes = {
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    inheritColor: PropTypes.bool,
  };

  static defaultProps = {
    Component: 'a',
  };

  render() {
    const { children, Component, inheritColor, ...rest } = this.props;
    const classes = classnames('ax-link', {
      'ax-link--inherit-color': inheritColor,
    });

    return (
      <Base { ...rest } Component={ Component } className={ classes }>
        { children }
      </Base>
    );
  }
}
